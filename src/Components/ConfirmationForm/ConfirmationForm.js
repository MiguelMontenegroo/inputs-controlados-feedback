import React, {useState} from 'react'
import { Form} from '../MainPage/styles'
import {  Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  const [data, setData] = useState("")
const [telefone, setTelefone] = useState("")
const [genero, setGenero] = useState("")
const [declaracao, setDeclaracao] = useState("")
const [curso, setCurso] = useState("")
const [curso2, setCurso2] = useState("")
const [ensinoMedio, setEnsinoMedio] = useState("")
const [disponibilidade, setDisponibilidade] = useState("")

const onChangeDisponibilidade= (event) => {
  setDisponibilidade(event.target.value)
}

const onChangeEnsinoMedio= (event) => {
  setEnsinoMedio(event.target.value)
}

const onChangeCurso2= (event) => {
  setCurso2(event.target.value)
}

const onChangeCurso= (event) => {
  setCurso(event.target.value)
}

const onChangeDeclaracao= (event) => {
  setDeclaracao(event.target.value)
}

const onChangeGenero = (event) => {
  setGenero(event.target.value)
}

const onChangeTelefone = (event) => {
  setTelefone(event.target.value)
}

const onChangeData = (event) => {
  setData(event.target.value)
}

  const sendConfirmation = () => {
   alert("inscrição finalizada")
  setData("")
  setTelefone("")
 setGenero("")
  setDeclaracao("")
  setCurso("")
  setCurso2("")
  setEnsinoMedio("")
  setDisponibilidade("")

  }
  
  
  return (
    <Form>
        <label>
          Data de nascimento:
          <Input type='date' placeholder="00/00/0000" value={data} onChange={onChangeData}/>
        </label>
        <label>
          Telefone:
          <Input type='number' placeholder="seu telefone" value={telefone} onChange={onChangeTelefone}/>
        </label>
        <label>
          Escolha seu Gênero:
         
          <select value={genero} onChange={onChangeGenero}>
            <option value="Homem cisgênero">Homem cisgênero</option>
            <option value="Mulher cisgênero">Mulher cisgênero</option>
            <option value="Homem trans">Homem trans</option>
            <option value="Mulher trans">Mulher trans</option>
            <option value="Pessoa não binária">Pessoa não binária</option>
            <option value="Prefiro não dizer">Prefiro não dizer</option>
          </select>
          
        </label>
        <label>
          Escolha como você se declara:
         
          <select value={declaracao} onChange={onChangeDeclaracao}>
            <option value="Negro">Negro</option>
            <option value="Branco">Branco</option>
            <option value="Pardo">Pardo</option>
            <option value="Amarelo">Amarelo</option>
            <option value="Indigena">Indigena</option>
            <option value="Prefiro não dizer">Prefiro não dizer</option>
          </select>
          
        </label>
        <label for="curso">Curso integral web fullstack
          <input id="curso" type="radio" value={curso} onChange={onChangeCurso}></input>
        </label>
        <label for="curso2">Curso noturno web fullstack
          <input id="curso2" type="radio" value={curso2} onChange={onChangeCurso2}></input>
        </label>
        <label for="ensinomedio"> Tenho Ensino Medio completo
        <input type="checkbox" id="ensinomedio" name="vehicle1" value={ensinoMedio} onChangeEnsinoMedio={onChangeEnsinoMedio}></input>
</label>
<label for="disponibilidade"> Tem disponibilidade para participar das atividades
        <input type="checkbox" id="disponibilidade" name="vehicle1" value={disponibilidade} onChangeDisponibilidade={onChangeDisponibilidade}></input>
</label>
      <button onClick={sendConfirmation} >Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm