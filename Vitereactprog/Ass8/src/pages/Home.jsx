import {Link} from "react-router-dom";

function Home(){
return(
    <div style={{textAlign:"center"}}>
        <h1>Welcome to Home page</h1>
        <Link to="/login">Go to login</Link>
    </div>
);
}
export default Home;