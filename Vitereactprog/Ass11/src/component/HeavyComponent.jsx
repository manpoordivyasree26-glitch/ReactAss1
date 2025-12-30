import React from "react";

function HeavyComponent(){
    console.log("HeavyComponent Rendered")

    let total=0;
    for(let i=0;i<1000000;i++){
        total +=1;
    }
    return(
        <div style={{ border: "2px solid red", padding: "20px", marginTop: "20px" }}>
            <h2>Heavy Component</h2>
            <p>This component is expensive to render.</p>
        </div>
    )

}
export default React.memo(HeavyComponent);