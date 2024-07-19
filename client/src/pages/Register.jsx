import { useState } from "react"
import GoogleAuth from "../components/GoogleAuth"

const Register = () => {
  document.title = "Register"
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const register = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:1616/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className="flexCenter py-20">
      <div className="flexCenter flex-col">
        <h2 className="title">Register</h2>
        <div className="w-[400px]">
          <form>
            <input type="text" className="input" placeholder="Username"
              value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <input type="email" className="input" placeholder="Email"
              value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" className="input" placeholder="Password"
              value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={register} className="btn">Register</button>
          </form>
          <GoogleAuth/>
          <p className="text-base mt-4">Have an Account? Login</p>
        </div>
      </div>
    </main>
  )
}

export default Register