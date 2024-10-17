import React, { useState } from 'react'

const Useformdata = () => {
  const [FormData, SetformData] = useState({
    Username: '',
    Email: '',
    Password: ''
  })
  const [errors, Seterrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'Username':
        if (!value) {
          error = 'please enter the username'
        } else if (value.length < 4) {
          error = 'username should be at least 4 characters'
        }
        break
      case 'Email':
        if (!value) {
          error = 'please enter your email id'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'please enter the emailid in the correct format'
        }
        break
      case 'Password':
        if (!value) {
          error = 'please enter the password'
        } else if (value.length < 6) {
          error = 'password should contain at least 6 characters'
        }
        break
    }
    return error
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    SetformData({ ...FormData, [name]: value })
    const error = validateField(name, value)
    Seterrors((prevErrors) => ({ ...prevErrors, [name]: error }))
    setIsSubmitted(false)
  }
  const validateForm = () => {
    const newErrors = {}

    Object.keys(FormData).forEach((key) => {
      const error = validateField(key, FormData[key])
      if (error) newErrors[key] = error
    })

    Seterrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e, callback) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      callback(FormData)
    }
  }
  return { FormData, errors, handleChange, handleSubmit, isSubmitted }
}

export default Useformdata
