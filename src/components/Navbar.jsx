import '../index.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

const navegar = useNavigate()

let go_to_Register = () =>{
navegar('/')
}
let go_to_Login = () =>{
    navegar('/Login')
}
    
  return (
    <div id="nav">
    <h3 onClick={go_to_Login}>Login</h3>
    <h3 onClick={go_to_Register}>Register</h3>
    </div>
  )
}

export default Navbar