import { useState } from 'react'
import './Login.css'

const Login = () => {

    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[user, setUser] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, password)
        // URL = "https://randomuser.me/api/"
        const URL2 = "https://magictool.dev.br/api/v1/user/login"
        //postData(URL2, {name, password})
    
    }

  return (
    <div>
        <h1>Faça seu login</h1>
        <form className='login' onSubmit={handleSubmit}>
            <div>
                <label >
                    <span>Username</span>
                    <input type="text" onChange={((e) => setName(e.target.value))}></input>
                </label>
            </div>
            <div>
                <label >
                    <span>Password</span>
                    <input type="password" onChange={((e) => setPassword(e.target.value))}></input>
                </label>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Login
