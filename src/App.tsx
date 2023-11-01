import { useState, FormEvent } from 'react'

import './App.css'

interface ResultadoProps{
  idade: number;
  name: string;
}

function App() {
  const [name, setName] = useState<string>("")
  const [idade, setIdade] = useState< number | string>()
  const [result, setResult] = useState<ResultadoProps>()

  function handleResult(e: FormEvent){
    e.preventDefault()

    const currentYear = new Date().getUTCFullYear();
    setResult({
      name: name,
      idade: currentYear - Number(idade)
    })

    setName("")
    setIdade(0)
  }

  return (
    <div className="container">
      <h1 className='text'>Descubra a sua idade.</h1>
      <form onSubmit={handleResult}>
        <label>
          <p>Seu nome :</p>
          <input 
            type="text" 
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Seu ano de nascimento :</p>
          <input 
            type="number" 
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" className='button'/>
      </form>
      {result?.idade && result.name !== '' && (
        <div className='result'>
        <p>Olá {result?.name} </p>
        <p>Você tem {result?.idade} anos</p>
      </div>
      )}
    </div>
  )
}

export default App
