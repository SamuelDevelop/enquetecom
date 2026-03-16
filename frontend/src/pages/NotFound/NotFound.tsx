import Header from "../../components/Header/Header";

function NotFound(){
    return (
        <>
            <Header />
            <section className="under-header">
                <h1>Ops! Página não Encontrada</h1>
                <img src="/src/assets/pandaAstronauta.webp" width={200}></img>
            </section>            
        </>
    )
}

export default NotFound;