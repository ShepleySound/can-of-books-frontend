import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component {

  render() {
    return(
      <Carousel variant="dark" className="Carousel">
        {this.props.books.map(book => {
          return (
            <Carousel.Item key={book._id}>
              <Button className='Carousel_deleteButton' variant="light" onClick={() => console.log(book)}>
                <img className='Carousel_deleteButton_image' src='assets/icons8_trash.svg' alt='delete' width={18} height={18}></img>
              </Button>
              <img src ='assets/cover-unavailable-image.png' alt='Random' width={400} height={600}/>
              <Carousel.Caption className='Carousel_caption'>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    )
  }
}

export default BookCarousel;