import styles from "./Login.module.css";
import logo from "../../../public/time.png"

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <div className={styles.login_container}>
                <img src={logo} alt="" />
                <label htmlFor="key">chave de autenticação:</label>
                <input className={styles.key_input} type="text" placeholder="digite a sua chave" />
                <button>Entrar</button>
            </div>
        </>
    )
}

export default Login;