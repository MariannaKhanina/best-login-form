<script lang="ts">
    import { alertStore } from '../stores/alert';
    import { login } from '../../api/login';

    import { Input } from '../ui/input';
    import { Button, ButtonType } from '../ui/button';
    import { Link } from '../ui/link';

    import s from './login-form.module.css';

    let username: string = '';
    let password: string = '';

    function handleSubmit(e: Event) {
        e.preventDefault();

        login(username, password)
            .then((res) => {
                alertStore.showSuccessAlert('Login successful');
            })
            .catch((err) => {
                alertStore.showErrorAlert(err.message);
                password = '';
            });
    }
</script>

<form class={s.container} on:submit={handleSubmit} aria-label="Login form">
    <div class={s.inputs}>
        <Input label="Username" type="text" autocomplete="username" required bind:value={username}>
            <i class="fa-solid fa-user" slot="icon" aria-hidden="true"></i>
        </Input>
        <Input label="Password" type="password" required bind:value={password}>
            <i class="fa-solid fa-key" slot="icon" aria-hidden="true"></i>
        </Input>

        <div class={s.forgotPassword}>
            <Link href="/link-to-reset-password" classes={s.forgotLink}>Forgot password?</Link>
        </div>
    </div>
    <Button type={ButtonType.Submit} isDisabled={!username || !password}>Login</Button>
</form>
