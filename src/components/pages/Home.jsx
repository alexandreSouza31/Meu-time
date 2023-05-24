import styles from "./Home.module.css";

import LinkButton from "../layoult/LinkButton";
import Api from "../layoult/Api";
import { useState } from "react";
import ApiLeague from "../layoult/ApiLeague";

const Home = () => {
  
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h1>Bem-vindo</h1>
                <LinkButton to="/" text="Sair" />
            </nav>

            <main className={styles.main}>
                <h3>Selecione os campos abaixo para ver as estatísticas de um time:</h3>
                <div className={styles.container_main}>

                    <Api/>

                    {/* <ApiLeague /> */}
                    
                    {/* <label htmlFor="league">Selecione a liga:</label>
                    <select name="" className={styles.league}>
                        <option value="">Selecione</option>
                    </select> */}

                    <label htmlFor="team">Selecione o time:</label>
                    <select name="" className={styles.team}>
                        <option value="">Selecione</option>
                        <option value="">{ }</option>
                    </select>
                    <button>Ver time</button>
                </div>
            </main>
        </div>
    )
}

export default Home;