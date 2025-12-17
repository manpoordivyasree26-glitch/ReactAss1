import UserInfo from "./UserInfo";

function Userprofile(){
const name="Divya";
const age="21";
return(
<div>
 <h2>User profile</h2>
 <UserInfo name={name} age={age}></UserInfo>
</div>
)
}
export default Userprofile;