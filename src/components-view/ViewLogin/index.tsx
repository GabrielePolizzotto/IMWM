import { FC, SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom"

export const ViewLogin: FC = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const {login} = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()


    try {
      setError('')
      setLoading(true)
      await login(emailRef.current!.value, passwordRef.current!.value)
    history.push("/")
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <div>
      <h2>Log In</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
        <label>Email</label>
        <input type="email" ref={emailRef} required/>
        </div>
        <div>
        <label>Password</label>
        <input type='password' ref={passwordRef} />
        </div>
        <div>
        <button disabled={loading}>Login</button>
        </div>
      </form>
      <div>Need an account?
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};
