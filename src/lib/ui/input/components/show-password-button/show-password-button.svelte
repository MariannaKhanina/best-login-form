<script lang="ts">
    export let clickHandler: () => void;
    export let isOpen: boolean = true;
    export let classes: string | undefined = undefined;

    function handleClick() {
        clickHandler();
    }
</script>

<button type="button" class={classes} on:click={handleClick}>
    {#if isOpen}
        <i class="fa-solid fa-eye"></i>
    {:else}
        <i class="fa-solid fa-eye-slash"></i>
    {/if}
</button>
