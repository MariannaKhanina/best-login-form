<script lang="ts">
    import { LoginForm } from '../login-form';

    import s from './login-section.module.css';

    export let title: string;
</script>

<section class={s.container}>
    <h1 class={s.title}>{title}</h1>

    <LoginForm />
</section>
