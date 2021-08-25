import { FC, SyntheticEvent, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ViewSignUp: FC = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null)

  const {signup} = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if(passwordConfirmRef.current!.value !== passwordRef.current!.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current!.value, passwordRef.current!.value)
      history.push("/login")
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
      <h2>Sign Up</h2>
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
        <label>Confirm password</label>
        <input type='password' ref={passwordConfirmRef}  />
        </div>
        <div>
        <button disabled={loading}>Signup</button>
        </div>
      </form>
      <div>Already have an account?
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};
