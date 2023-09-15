import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import products from './components/Data';
import CardComponent from './components/Card';


function App() {
  const [selectedCategory, setSelectedCategory ] = useState(null)


  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // filteredData function
  function filteredData(products, selected){
    // products (param to filteredData)
    let filteredProducts = products

    // filtering items
    if(selected){
      filteredProducts = filteredProducts.filter(
        // product (param to products)
        (product) => 
        product.category === selected ||
        product.color === selected ||
        product.company === selected ||
        product.newPrice === selected ||
        product.title === selected  ||
        product.availability === selected
      )
    }

    // Destructing the data and passing to the card component dynamically as props
    return (filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice, availability}) => ( 
      <CardComponent
        img = {img}
        title = {title}
        star = {star}
        reviews = {reviews}
        newPrice = {newPrice}
        prevPrice = {prevPrice}
        availability = {availability}
      />
    ))
    )
  }

  const result = filteredData(products, selectedCategory)

  return (
    <>
      <Row>
        <Col sm={3}>
          <Sidebar handleChange = {handleChange}/>
        </Col>
        <Col sm={9}>
         <ProductList result={result}/>
        </Col>
      </Row>
    </>
  );
}

export default App;
