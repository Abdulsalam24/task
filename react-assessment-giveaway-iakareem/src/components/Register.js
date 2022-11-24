import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = ({ setUser }) => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name === "" || form.email === "") {
            alert("Please fill the form")
        } else if (!form.email.includes("@") || !form.email.includes(".com")) {
            alert("Please fill the email form correctly")
        }
        else {
            setUser(form)
            navigate("/dashboard")
            localStorage.setItem("userInfo", JSON.stringify(form))
        }
    }


    return (
        <div className="form">
            <form className="center" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input placeholder="Enter name" type="text" value={form.name} name='name' onChange={handleChange} />
                </label>

                <label>
                    Email:
                    <input placeholder="Enter email" type="email" value={form.email} name='email' onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Register