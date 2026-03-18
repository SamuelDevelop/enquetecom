import SimpleHeader from "../../components/Header/SimpleHeader";

import RegistrationForm from "../../components/Logins/RegistrationForm";

function Login(){
    return(
        <>
            <SimpleHeader/>
            <main>
                <RegistrationForm />
            </main>            
        </>
    )
}

export default Login;