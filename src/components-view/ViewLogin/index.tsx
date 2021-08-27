import { FC, SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom"
import { Container } from "../../components-ui/Container";
import { Button } from "../../components-ui/Button";
import { Form } from "../../components-ui/Form";
import { InputLabelWrapper, Label, Input } from "../../components-ui/Input";

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
    <Container>
      <h2>Log In</h2>
      {error && <div>{error}</div>}
      <Form onSubmit={handleSubmit}>
        <InputLabelWrapper>
        <Label>Email</Label>
        <Input type="email" ref={emailRef} required/>
        </InputLabelWrapper>
        <InputLabelWrapper>
        <Label>Password</Label>
        <Input type='password' ref={passwordRef} />
        </InputLabelWrapper>
        <Button type="submit"  disabled={loading}>Login</Button>
      </Form>
      <div>Need an account? 
        <Link to="/signup">Sign up</Link>
      </div>
    </Container>
  );
};
