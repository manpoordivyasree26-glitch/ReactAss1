import {NavLink} from "react-router-dom";

const linkStyle=({isActive})=>({
    textDecoration:"none",
    color: isActive ? "yellow" : "White",
    marginRight:"20px",
    fontWeight:"bold",

});


function Navbar(){
return(
    <div style={{background:"#333", padding:"15px"}}>
        <NavLink to="/home" style={linkStyle}>Home</NavLink>
        <NavLink to="/aboutus" style={linkStyle}>AboutUs</NavLink>
        <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
    </div>
)
}
export default Navbar;