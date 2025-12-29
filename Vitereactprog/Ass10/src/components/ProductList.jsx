function ProductList({products, onSelectProduct}){
   console.log("productList rendered")
   return(
      <div>
         <h3>Products</h3>
         {products.map((product)=>(
            <div key={product.id}>
               {product.name}-{product.price}
               <button onClick={()=> onSelectProduct(product)}>
                  Select
                  </button>
                  </div>
         ))}
      </div>
   );

}
export default ProductList;