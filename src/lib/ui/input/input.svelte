<script lang="ts">
    import cn from 'classnames';

    import { ShowPasswordButton } from './components/show-password-button';

    import { InputType } from './types';
    import s from './input.module.css';

    export let label: string | undefined = undefined;
    export let type: InputType = InputType.Text;
    export let placeholder: string | undefined = undefined;
    export let value: string;
    export let autocomplete: string | undefined =
        type === InputType.Password ? 'new-password' : undefined;
    export let required: boolean = false;

    let innerType = type;
    let inputId = label
        ? label.toLowerCase().replace(/\s+/g, '-')
        : `input-${Math.random().toString(36).substr(2, 9)}`;

    function handleInput(event: Event) {
        value = (event.target as HTMLInputElement).value;
    }

    function toggleType() {
        innerType = innerType === InputType.Password ? InputType.Text : InputType.Password;
    }
</script>

<div
    class={cn(s.container, {
        [s.withIcon]: $$slots.icon,
        [s.withShowPasswordButton]: type === InputType.Password,
    })}
>
    {#if label}
        <label class={s.label} for={inputId}>{label}</label>
    {/if}
    <div class={s.inputContainer}>
        {#if $$slots.icon}
            <div class={s.icon}>
                <slot name="icon"></slot>
            </div>
        {/if}
        <input
            id={inputId}
            type={innerType}
            {value}
            {placeholder}
            {autocomplete}
            {required}
            aria-required={required}
            class={s.input}
            on:input={handleInput}
        />
        {#if type === InputType.Password}
            <ShowPasswordButton
                isOpen={innerType === InputType.Password}
                clickHandler={toggleType}
                classes={s.showPasswordButton}
            />
        {/if}
    </div>
</div>
