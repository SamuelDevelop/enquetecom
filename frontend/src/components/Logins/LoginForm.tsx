import Card from "../Card/Card"
import Button from "../GenericButton/Button"
import styles from "./Forms.module.css"

function LoginForm(){
    return (
        <section className="under-header">
            <Card>
                <form>
                    <h1>Antes Precisamos te conhecer! é Rapidinho...</h1>
                    <h2>Dados Básicos:</h2>
                    <input placeholder="Digite seu nome aqui..."></input>
                    <input placeholder="E aqui um endereço de email..."></input>
                    
                    <h2>Queremos Te conhecer Melhor:</h2>
                    <select>
                        <option>Visitante</option>
                        <option>Empreendedor</option>
                        <option>Funcionario Público</option>
                        <option>Influenciador</option>
                        <option>Estudante</option>
                        <option>Outros...</option>
                    </select>

                    <p>Ciente de que meus dados poderam ser utilizados para fins de pesquisa:</p>
                    <input type="checkbox"></input>
            
                    <Button onClick={()=> window.location.href = "./dashboard"}>Tudo Pronto</Button>
            </form>
            </Card>

            <p>Já possui uma conta?</p>
            <Button onClick={()=> window.location.href = "./dashboard"}>Entrar</Button>
        </section>
    )
}

export default LoginForm