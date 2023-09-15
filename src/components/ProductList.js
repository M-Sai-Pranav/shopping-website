import React from 'react'

// Destructure
function ProductList({result}){
    return (
      <div style={{
        height: "82%",
        textAlign: "center",
        marginBottom: "9%"
    }}>
    <h3>Flipkart</h3>
        <div className="d-flex justify-content-between align-items-start " style={{ flexFlow: "row wrap"}}>
        {result}
        </div>  
      </div>
    )
}

export default ProductList;



