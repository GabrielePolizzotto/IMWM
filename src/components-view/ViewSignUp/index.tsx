import { FC, SyntheticEvent, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components-ui/Button";
import { Container } from "../../components-ui/Container";
import { Form } from "../../components-ui/Form";
import { Input, InputLabelWrapper, Label } from "../../components-ui/Input";
import { useAuth } from "../../contexts/AuthContext";

export const ViewSignUp: FC = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)

  const {signup} = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if(passwordConfirmRef.current?.value !== passwordRef.current?.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current?.value, passwordRef.current?.value)
      history.push("/login")
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <Container>
      {error && <div>{error}</div>}
      <div>
        <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <InputLabelWrapper>
          <Label>Email</Label>
          <Input  type='email' ref={emailRef} required/>
        </InputLabelWrapper>
        <InputLabelWrapper>
          <Label>Password</Label>
          <Input  type='password' ref={passwordRef} required/>
        </InputLabelWrapper>
        <InputLabelWrapper>
          <Label>Confirm password</Label>
          <Input type='password' ref={passwordConfirmRef} required/>
        </InputLabelWrapper>
          <Button type="submit" disabled={loading}>Sign Up</Button>
        </Form>
        <div style={{textAlign:'center'}}>Already have an account? 
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
};
