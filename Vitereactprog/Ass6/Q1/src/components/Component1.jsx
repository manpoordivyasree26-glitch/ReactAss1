
import {AppContext} from "../context/AppContext";
import Component2 from "./Component2";

function Component1(){
const values={
    a:"Apple",
    b:"ball",
    c:"cat",
    d:"dog",
    e:"elephant",
    f:"fish",


};
return(
    <div>
    <AppContext.Provider value={values}>
    <h3>Component1</h3>
    <Component2/>
    </AppContext.Provider>

    </div>
)
}
export default Component1;