import { useEffect, useState } from 'react'
import "./Form.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    error: "",
  }


  const [user, setUser] = useState(initialState)
  const [state, setState] = useState(initialState)

  const [submit, setSubmit] = useState(false)

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    validate(state)
    setSubmit(true)
    setUser(state)

  }



  useEffect(() => {
    if (submit && Object.keys(state.error).length === 0) {
      let valuesInfo = Object.values(state).splice(0, 5).join(" ")
      prompt(valuesInfo)
      setState(initialState)
    }
  }, [user])



  const validate = (value) => {
    let error = {}

    if (value.firstName === "") {
      error.firstName = 'First name is required'
    } else if (value.firstName.length < 5) {
      error.firstName = 'First name must be more than 5 characters'
    }
    if (value.lastName === "") {
      error.lastName = 'Last name must be more than 5 characters'
    }
    if (value.email === "") {
      error.email = 'Email is required'
    } else if (!value.email.includes("@")) {
      error.email = 'Email must include @'
    }
    if (value.phone.length === 0) {
      error.phone = 'Phone is required'
    } else if (value.phone.length < 10) {
      error.phone = 'Phone must be more than 10 characters'
    }
    if (value.message.length === 0) {
      error.message = 'Message is required'
    } else if (value.message.length < 4) {
      error.message = 'Message must be more than 4 characters'
    }

    return setState((prev) => ({ ...prev, error: error }))
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        First Name:
        <input minLength='6' maxLength='10' placeholder="First Name" type="text" value={state.firstName} name='firstName' onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input minLength='6' maxLength='10' placeholder="Last Name" type="text" value={state.lastName} name='lastName' onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input placeholder="you@provider.com" type="email" value={state.email} name='email' onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="(XXX)-XXX-XXXX" type="tel" value={state.phone} name='phone' onChange={handleChange} required />
      </label>

      <label>
        Message:
        <textarea minLength='6' maxLength='20' placeholder="Message" type="text" value={state.message} name='message' onChange={handleChange} />
      </label>

      <button onClick={onSubmit} type="submit">Submit</button>

      <div className="error">
        <p>{state.error.firstName}</p>
        <p>{state.error.lastName}</p>
        <p>{state.error.email}</p>
        <p>{state.error.phone}</p>
        <p>{state.error.message}</p>

      </div>
    </form>
  );
};

export default Form;
