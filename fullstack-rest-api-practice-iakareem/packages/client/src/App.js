import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState(false)

  const initialstate = {
    username: "",
    password: ""
  }

  const URL = "http://localhost:3001/api/users/"

  const [text, setText] = useState(initialstate)

  const fetchUsers = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addUser = (e) => {
    e.preventDefault()

    const postUsers = async () => {
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(text)
      });
    }

    setText(initialstate)
    postUsers()
    fetchUsers()
  }

  const handleDel = (id) => {
    const delUser = async () => {
      await fetch(`${URL}${id}`, {
        method: 'DELETE',
      });
    }
    delUser()
    fetchUsers()
  }

  const updateInput = (id) => {
    const filtered = users.filter((user) => user.userIndex === id)
    const { username, password, userIndex } = filtered[0]
    setEdit(true)
    setText({
      username,
      password,
      userIndex
    })
  }

  const editUser = (e) => {
    e.preventDefault()

    const editUser = async () => {
      await fetch(`${URL}${text.userIndex}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(text)
      })
    }

    editUser()
    fetchUsers()
    setText(initialstate)
    setEdit(false)
  }

  return (
    <div className='app'>
      <div className='users'>
        <form>
          <label htmlFor="">Add new user</label>
          <div className='input'>
            <input type="text" placeholder='Add new username' value={text.username} name='username' onChange={(e) => handleChange(e)} />
          </div>
          <div className='input'>
            <input type="password" placeholder='Add new password' value={text.password} name='password' onChange={(e) => handleChange(e)} />
          </div>
          <div>
            {edit ? (<button onClick={editUser}>Edit</button>) :
              (<button onClick={addUser}>Add User</button>)
            }
          </div>
        </form>

        {
          users?.map((user) => (
            <div key={user.userIndex} className="user">
              <div>
                <h2>{user.username}</h2>
              </div>
              <div>
                <button onClick={() => updateInput(user.userIndex)}>edit</button>
              </div>
              <div>
                <button onClick={() => handleDel(user.userIndex)}> del</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
};

export default App;
