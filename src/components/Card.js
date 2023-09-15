import Card from 'react-bootstrap/Card';

// Destructure
function CardComponent({img, title, star, reviews, newPrice, prevPrice, availability}) {
  return (
    <Card style={{ width: '18rem', marginTop:"25px" }}>
      <Card.Img variant="top" src={img} style={{padding:"25px"}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <del>{prevPrice}</del>{newPrice}
          <div>
          {star}
          {star}
          {star}
          </div>
          <p>{reviews}</p>
          <p>{availability}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
