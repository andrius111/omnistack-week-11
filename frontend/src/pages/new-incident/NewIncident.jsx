import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Swal from 'sweetalert2'

import api from '../../services/api'
import './NewIncident.css'

import logoImg from '../../assets/logo.svg'

export default () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      Swal.fire(
        'Pronto',
        'Incidente cadastrado com sucesso',
        'success'
      ).then(() => {
        setTitle('')
        setDescription('')
        setValue('')
      })
    } catch(err) {
      Swal.fire(
        'Ops...',
        'Ocorreu um problema ao salvar o incidente, tente novamente!',
        'error'
      )
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={ logoImg } alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar p/ Home
          </Link>
        </section>

        <form onSubmit={ handleNewIncident }>
          <input 
            placeholder="Título do Caso" 
            value={ title }
            onChange={ e => setTitle(e.target.value) }
            required="required"
          />

          <textarea 
            placeholder="Descrição" 
            value={ description }
            onChange={ e => setDescription(e.target.value) }
            required="required"
          />

          <input 
            placeholder="Valor (R$)" 
            value={ value }
            onChange={ e => setValue(e.target.value) }
            required="required"
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}