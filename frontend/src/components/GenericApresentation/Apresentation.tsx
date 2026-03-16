import styles from "./Apresentation.module.css"
import Button from "../GenericButton/Button"
import { FaAngleDoubleUp, FaFire } from "react-icons/fa";
import Card from "../Card/Card";

function Apresentation(){
    return (
        <>
            <section className={`${styles.secao} under-header`}>
                <div className={styles.text}>
                    <h1 className={styles.titulo}>Boas Vindas ao EnqueteCom</h1>

                    <p> O maior criador de enquetes que já foi criado por mim.
                        <br></br>
                        Crie e gerencie enquetes de um jeito profissional, personalizado e gratuito.
                    </p>

                    <p>Comece Hoje mesmo a inportunar as pessoas com enquetes bizarras.</p>

                    <Button onClick={()=> window.location.href = "/login"}>Começar</Button>
                </div>
                
                <img className={styles.sectionImage} src="/src/assets/estatistica.jpg"></img>
            </section>
            
            <section className={styles.secao}>
                <Card>
                    <h1 className={styles.titulo}>Alavanque seus negócios Hoje Mesmo!</h1>
                    <p>Crie enquentes para engajar seus clientes, entender suas preferencias e melhorar a Experience De Usuário</p>
                    <Button>Alavancar <FaAngleDoubleUp /></Button>
                </Card>

                <Card>
                    <h1 className={styles.titulo}>Veja as enquetes mais votadas do momento!</h1>
                    <p>Acompanhe os <FaFire /> trending topics globais, e fique por dentro do que é discutido e viraliza mundo a fora</p>
                    <Button>Trends Globais <FaFire /></Button>
                </Card>

            </section>
        </>
    )
}

export default Apresentation;