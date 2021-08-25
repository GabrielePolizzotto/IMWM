import { FC, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export const ViewDashboard: FC = (): JSX.Element => {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  const handleLogout = async() => {
    setError('')
    try {
      await logout()
      history.push("/login")
    } catch{
      setError('Failed to log out')
    }
  }

  return (
    <>
      <h2>Dashboard</h2>
      <div>
        <h3>Profile</h3>
        {error && alert({error}) }
        <p>Email: {currentUser.email}</p>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </>
  )
  
};
