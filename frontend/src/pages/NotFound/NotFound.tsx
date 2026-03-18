import Header from "../../components/Header/Header";

function NotFound(){
    return (
        <>
            <Header />
            <main>
                <h1>Ops! Página não Encontrada</h1>
                <img src="/src/assets/pandaAstronauta.webp" width={200}></img>
            </main>                  
        </>
    )
}

export default NotFound;