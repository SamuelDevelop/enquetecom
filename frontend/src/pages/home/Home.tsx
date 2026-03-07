import Header from "../../components/Header/Header"
import Apresentation from "../../components/GenericApresentation/Apresentation"
import { motion } from "framer-motion"

function Home(){
    return(
        <>
            <Header/>
            <motion.div
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6 }}
            >
                <Apresentation/>
            </motion.div>
        </>
    )
}

export default Home;