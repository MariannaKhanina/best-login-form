<script lang="ts">
    import s from './button.module.css';

    import { ButtonType } from './types';

    export let type: ButtonType;
    export let isDisabled: boolean = false;
</script>

<button class={s.button} {type} disabled={isDisabled}>
    <slot />
</button>
