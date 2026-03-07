import styles from "./Apresentation.module.css"
import Button from "../GenericButton/Button"

function Apresentation(){
    return (
        <>
            <section className={styles.secao}>
                <div className={styles.text}>
                    <h1 className={styles.titulo}>Boas Vindas ao EnqueteCom</h1>

                    <p> O maior criador de enquetes que já foi criado por mim.
                        <br></br>
                        Crie e gerencie enquetes de um jeito profissional, personalizado e gratuito.
                    </p>

                    <p>Comece Hoje mesmo a inportunar as pessoas com enquetes bizarras.</p>

                    <Button>Começar</Button>
                </div>
                
                <img className={styles.sectionImage} src="/src/assets/estatistica.jpg"></img>

            </section>

            <section>

            </section>
        </>
    )
}

export default Apresentation;