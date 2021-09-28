import { FC, useState } from "react";
import { useHistory } from "react-router";
import { Customers } from "../../components-shared/Customers";
import { Container } from "../../components-ui/Container";
import { Form } from "../../components-ui/Form";
import { Header } from "../../components-ui/Header";
import { Input, InputLabelWrapper, Label } from "../../components-ui/Input";
import { useAuth } from "../../contexts/AuthContext";

export const ViewDashboard: FC = (): JSX.Element => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Container>
      <Header>
        <h2>Dashboard</h2>
          {error && alert({error}) }
          <p>Email: {currentUser.email}</p>
          <button onClick={handleLogout}>Log Out</button>
      </Header>
        <Form>
        <InputLabelWrapper>
          <Label>Ricerca cliente</Label>
          <Input/>
        </InputLabelWrapper>
        </Form>
        <Customers/>
    </Container>
  )
  
};
