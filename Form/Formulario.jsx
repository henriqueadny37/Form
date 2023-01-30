import { useState } from "react"

export default function formulario(){
    const [valor, setValor] = useState(undefined)

    function setAlterar(){
        setValor(valor + "!")
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            padding:"15px"
        }}>
          <input type="text" value={valor} 
          onChange={e => setValor(e. target.value)} />  
          <button onClick={setAlterar}>Entrar</button>
        </div>
    )
}