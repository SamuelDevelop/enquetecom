import styles from "./Apresentation.module.css"
import Button from "../GenericButton/Button"
import { FaAngleDoubleUp, FaFire } from "react-icons/fa";
import Card from "../Card/Card";
import { useState, useEffect } from "react"

function Apresentation(){
    
    const [imageIndex, setImageIndex] = useState<number>(0);
    
    const imagesVector = [
        "/src/assets/analiseDeDados.jpg",
        "/src/assets/estatistica.jpg",
        "/src/assets/estatistica2.jpg",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prev => (prev + 1) % imagesVector.length)
        }, 2500)

        return () => clearInterval(interval)
    }, []);

    const mainImage = imagesVector[imageIndex];    
    
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

                    <Button onClick={()=> window.location.href = "/createAccount"}>Começar</Button>
                </div>
                
                <img className={styles.sectionImage} src={mainImage}></img>
            </section>
            
            <section className={styles.secao}>
                <Card>
                    <h1 className={styles.titulo}>Alavanque seus negócios Hoje Mesmo!</h1>
                    <p>Crie enquetes estratégicas para engajar seus clientes de forma ativa, incentivando a participação e o diálogo constante com a sua marca. Utilize essas interações para compreender melhor as preferências, necessidades e expectativas do seu público, coletando insights valiosos que podem orientar decisões mais assertivas.</p>
                        
                    <p>Além de aumentar o envolvimento, as enquetes ajudam a construir um relacionamento mais próximo e personalizado com os usuários. Ao analisar as respostas, você consegue identificar padrões de comportamento e oportunidades de melhoria, permitindo ajustes contínuos nos seus produtos, serviços ou comunicação.
                    </p>
                    <Button>Alavancar <FaAngleDoubleUp /></Button>
                </Card>

                <Card>
                    <h1 className={styles.titulo}>Veja as enquetes mais votadas do momento!</h1>
                    <p>Acompanhe os <FaFire /> trending topics globais, e fique por dentro do que é discutido e viraliza mundo a fora</p>
                    <p>Ao acompanhar esses tópicos com consistência, você não apenas entende o que está em alta, mas também consegue antecipar tendências, adaptar sua comunicação e criar conteúdos mais relevantes, aumentando seu alcance e conexão com o público.</p>
                    <Button onClick={()=> window.location.href = "/trends"}>Trends Globais <FaFire /></Button>
                </Card>

            </section>

            <section className={`${styles.secao} ${styles.creditos}`}>
                <p>@SamuelDevelop 2026 | Projeto Pessoal</p>
            </section>
        </>
    )
}

export default Apresentation;