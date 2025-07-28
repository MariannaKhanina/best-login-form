<script lang="ts">
    import cn from 'classnames';
    import { AlertType } from './types';
    import { alertStore } from '../../stores/alert';

    import s from './alert.module.css';

    export let type: AlertType = AlertType.Error;
    export let message: string;
</script>

<div class={cn(s.container, s[type])} data-alert>
    {#if type === AlertType.Success}
        <i class="fa-solid fa-check"></i>
    {/if}

    {#if type === AlertType.Error}
        <i class="fa-solid fa-circle-exclamation"></i>
    {/if}

    <div class={s.message}>{message}</div>

    <button class={s.close} on:click={alertStore.hideAlert}>
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>
