import Component5 from "./Component5";

function Component4({c,d,e,f}){
return(
    <div>
        <h3>Component4</h3>
        <h4>This is a props c:{c}</h4>
        <h4>This is a props d:{d}</h4>

        <Component5 e={e} f={f}/>
    </div>
);

}
export default Component4;