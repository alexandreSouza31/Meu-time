import styles from "./Login.module.css";
import logo from "../../assets/logo.png"
import LinkButton from "../layoult/LinkButton";

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <div className={styles.login_container}>
                <img src={logo} alt="" />
                <label htmlFor="key">chave de autenticação:</label>
                <input className={styles.key_input} type="text" placeholder="digite a sua chave" />
                <LinkButton to="/home" text="Entrar"/>
            </div>
        </>
    )
}

export default Login;