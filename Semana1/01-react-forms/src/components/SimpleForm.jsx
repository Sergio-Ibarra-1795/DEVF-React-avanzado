import React, { useState } from 'react'

import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1: Crear los estados donde guardaremos la info tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const submitedData = JSON.stringify({
      email,
      password
    })
    console.log(submitedData)
  }

  // Paso 2: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(event) => setPassword(event.target.value)} />
          <button onClick={handleSubmit}>
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
