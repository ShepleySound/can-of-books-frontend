import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component {

  render() {
    return(
      <Carousel className="Carousel">
        {this.props.books.map(book => {
          return (
            <Carousel.Item key={book._id}>
              <img src ='https://source.unsplash.com/random/400x600' alt='Random' width={400} height={600} />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
                <Button onClick={() => console.log(book)}>Do a thing</Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    )
  }
}

export default BookCarousel;