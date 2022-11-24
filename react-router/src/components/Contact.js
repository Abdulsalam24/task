import React, { useState,useEffect } from 'react'

const Contact = () => {

    const [user, setUser] = useState({})
    const [form, setForm] = useState({
        name: "",
        email: "",
        reason: ""
    })

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name === "" || form.email === "" || form.reason === "") {
            alert("Please fill the form")
        } else if (!form.email.includes("@") || !form.email.includes(".com")) {
            alert("Please fill the email form correctly")
        }
        else {
            setUser(form)
            setForm({
                name: "",
                email: "",
                reason: ""
            })
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
                <label>
                    Reason for the contact:
                    <textarea
                        placeholder="How can we help you"
                        value={form.reason}
                        name="reason"
                        onChange={handleChange}>
                    </textarea>

            </label>

            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div >
    )
}

export default Contact