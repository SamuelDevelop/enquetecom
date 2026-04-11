import { useState } from "react";
import Card from "../Card/Card"
import Button from "../GenericButton/Button"
import styles from "./Forms.module.css"

function RegistrationForm(){

    const [dados, setDados] = useState({
        nome : "",
        email: "",
        senha: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;

        setDados(prev => ({
            ...prev,
            [name] : value
        }))
    }

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()

        try {
            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            })

            const resultado = await resposta.json()
            console.log(resultado)

        } catch (erro) {
            console.error("Erro ao enviar:", erro)
        }
    }

    const formValido = dados.nome && dados.email && dados.senha;

    return (
        <section className={styles.formSection}>
            <Card>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Antes Precisamos te conhecer! é Rapidinho...</h1>

                    <div className={styles.fields}>
                        <h2>Dados Básicos:</h2>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="nome"
                            value={dados.nome}
                            onChange={handleChange}
                            placeholder="Informe seu nome..."
                        />
                        
                        <input
                            className={styles.formInput}
                            type="text"
                            name="email"
                            value={dados.email}
                            onChange={handleChange}
                            placeholder="Digite seu email..."
                        />
                    </div>
                    
                    <div className={styles.fields}>
                         <h2>Crie Uma Senha:</h2>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="senha"
                            value={dados.senha}
                            onChange={handleChange}
                            placeholder="Crie uma senha forte..."
                        />
                    </div>
                   
                    {formValido && (
                        <Button type="submit">Tudo Pronto</Button>
                    ) || (
                        <p>Preencha todos os campos!</p>
                    )}
                </form>
            </Card>

            
            <p>Já possui uma conta?</p>
            <Button onClick={()=> window.location.href = "./dashboard"}>Entrar</Button>
            
        </section>        
    )
}

export default RegistrationForm;