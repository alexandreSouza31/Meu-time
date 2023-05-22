import styles from "./Login.module.css";

const Login = () => {
    return (
        <div>
            <h1>Meu time</h1>
            <label htmlFor="key">key de autenticação:</label>
            <input className={styles.key_input} type="text" />
            <button>Entrar</button>
        </div>
    )
}

export default Login;