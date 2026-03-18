import { useEffect, useState } from "react"
import { api } from "../../services/api"

function Usuarios(){
    const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    api.get("/usuarios")
      .then(res => setUsuarios(res.data))
  }, [])

  return (
    <div>
      {usuarios.map((u: any) => (
        <p key={u.id}>{u.nome}</p>
      ))}
    </div>
  )  
}

export default Usuarios;