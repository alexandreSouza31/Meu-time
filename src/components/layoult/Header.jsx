import styles from "../layoult/Header.module.css"

import LinkButton from "../layoult/LinkButton";
import logo from "../../assets/logo.png"

const Header = () => {

    return (
        <nav className={styles.nav}>
            <h2>Bem-vindo ao</h2><img src={logo} alt="" />
            <LinkButton to="/" text="Sair" />
        </nav>
    )
}

export default Header