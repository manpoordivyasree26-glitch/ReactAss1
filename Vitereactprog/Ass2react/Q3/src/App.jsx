import React from "react";
import MessageCard from "./MessageCard";
import "./App.css";

function App(){
return(
  <div>
    <h2>Message Cards</h2>
    <MessageCard 
    title="Welcome"
    message="Welcome to react Appication"/>
     <MessageCard
     title="Success"
     message="your data has been saved succesfully"/>
      <MessageCard
      title="Warning"
      message="Please chack your input values"/>
       <MessageCard
       title="Info"
       message="New udates are avaliable"/>
    
  </div>
);
}
export default App;