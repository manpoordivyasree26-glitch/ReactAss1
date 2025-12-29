import {useCallback, useMemo, useState} from "react";
import ProductList from "./components/ProductList";

function App(){
 const[counter,setCounter]=useState(0);
 
 const products=[
    {id:1,name:"Laptop", price:70000},
    {id:2,name:"earPhones",price:1000},
    {id:3,name:"phone",price:25000},
 ]
 const totalPrice=useMemo(()=>{
    console.log("Calculating the total price");
    return products.reduce((sum,product)=>sum+product.price,0)
 },[products])

 const handleSelectProduct=useCallback((product)=>{
   console.log("selected Products",product.name)
 },[]);

return(
   <div>
      <h2>React performance Optimization</h2>
      <h3>Total price=${totalPrice}</h3>
      <button onClick={()=>setCounter(counter+1)}>counter:{counter}</button>
      <ProductList 
      products={products}
      onSelectProduct={handleSelectProduct}
      />
</div>
);
}
export default App;