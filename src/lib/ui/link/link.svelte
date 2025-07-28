<script lang="ts">
    import cn from 'classnames';
    import s from './link.module.css';

    export let href: string;
    export let classes: string | undefined = undefined;
</script>

<a {href} class={cn(s.link, classes)}><slot /></a>
