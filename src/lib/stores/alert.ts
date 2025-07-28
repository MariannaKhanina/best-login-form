import type { SvelteComponent } from 'svelte';
import { get, writable } from 'svelte/store';
import { Alert, AlertType } from '../ui/alert';

const ALERT_HIDE_DELAY = 2000;

function createStore() {
    const store = writable<SvelteComponent | null>(null);
    const { subscribe, set } = store;
    let hidingTimer: ReturnType<typeof setTimeout> | null = null;

    const container = document.createElement('div');
    container.classList.add('alert-container');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);

    function setTimerForHiding() {
        if (hidingTimer) {
            clearTimeout(hidingTimer);
        }

        hidingTimer = setTimeout(() => {
            hideAlert();
        }, ALERT_HIDE_DELAY);
    }

    function showErrorAlert(message: string) {
        hideAlert();

        const component = new Alert({
            target: container,
            props: {
                message,
                type: AlertType.Error,
            },
        });

        set(component);

        setTimerForHiding();
    }

    function hideAlert() {
        const state = get(store);

        if (!state) {
            return;
        }

        const alertElement = container.querySelector('[data-alert]');

        if (alertElement) {
            alertElement.classList.add('slide-down');

            setTimeout(() => {
                container.innerHTML = '';
                set(null);
            }, 200);
        } else {
            container.innerHTML = '';
            set(null);
        }
    }

    function showSuccessAlert(message: string) {
        hideAlert();

        const component = new Alert({
            target: container,
            props: {
                message,
                type: AlertType.Success,
            },
        });

        set(component);
    }

    return {
        subscribe,
        showErrorAlert,
        showSuccessAlert,
        hideAlert,
    };
}

export const alertStore = createStore();
