import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component {

  render() {
    return(
      <Carousel variant="dark" className="Carousel">
        {this.props.books.map(book => {
          return (
            <Carousel.Item key={book._id}>
              <Button className='Carousel_deleteButton' variant="light" onClick={() => console.log(book)}>
                <Image className='Carousel_deleteButton_image' src='assets/icons8_trash.svg' alt='delete' width={18} height={18}></Image>
              </Button>
              <Image fluid src ='assets/cover-unavailable-image.png' width={320} height={200}/>
              <Carousel.Caption className='Carousel_caption'>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
                <p>{book._id}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    )
  }
}

export default BookCarousel;