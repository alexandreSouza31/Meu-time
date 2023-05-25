import styles from "./Home.module.css";

import Api from "../api/Api";
import Header from "../layoult/Header";
import Footer from "../layoult/Footer";


const Home = () => {
  
    return (
        <div className={styles.container}>
            <Header/>

            <main className={styles.main}>
                <h3>Selecione os campos abaixo para ver as estatísticas de um time:</h3>
                <div className={styles.container_main}>

                    <Api />
                    
                    <button>Ver time</button>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;