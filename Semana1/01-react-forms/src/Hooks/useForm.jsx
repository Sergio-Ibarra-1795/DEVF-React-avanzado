// Reglas para crear un hook de React
// Custom Hook es una función que va a utilizar otros Hooks de React
// 1. Siempre debemos usar la palabra 'use' al nombrar el archivo
// 2. Siempre debe n de ser funciones a partir de React v16 (que agrega funcioonalidad de hooks)
// 3. Siempre deben de usar al menos un hook de React (useState,useEffect, useRef, etc)
// 4. Deben ser reutilizables y no son hechos para casos especificos

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  // Funcion que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta al enviar el form
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
