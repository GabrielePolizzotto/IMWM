import { Redirect, Route } from "react-router"
import { useAuth } from "./contexts/AuthContext"

//@ts-ignore
export const PrivateRoute = ({component:Component,  ...rest}):JSX.Element => {
  const {currentUser} = useAuth()

  return ( 
    <Route {...rest} render={ props => {
      return currentUser ? <Component {...props}/>: <Redirect to="/login"/>
    }
    }></Route>
  )
}