import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  handleDelete = async (bookId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/books/${bookId}`)
      this.props.getBooks();
    } catch (error) {
      console.error('Error in handleDelete:', error)
    }

    this.setState(state => {
      if (state.index > 0) {
        return {index: state.index - 1};
      } else return {index: state.index}
    })
  }
  
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex
    })
  }

  render() {
    return(
      <Carousel interval={null} activeIndex={this.state.index} onSelect={this.handleSelect} variant="dark" className="Carousel">
        {this.props.books.map(book => {
          return (
            <Carousel.Item key={book._id}>
              <Image fluid src ='assets/cover-unavailable-image.png' width={320} height={200}/>
              <Carousel.Caption className='Carousel_caption'>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p className='Carousel_bookDescription'>{book.description}</p>
                <p>{book.status ? 'You have read this book' : 'You have not read this book'}</p>
              </Carousel.Caption>
              <div className='Carousel_buttonRow'>
                <Button variant='secondary' className='Carousel_editButton' onClick={() => this.props.handleEdit(book)}>
                  <Image className='Carousel_editButton_image' src='assets/icons8_edit.svg' alt='delete' width={16} height={16}></Image>
                </Button>
                <Button variant='secondary' className='Carousel_deleteButton' onClick={() => this.handleDelete(book._id)}>
                  <Image className='Carousel_deleteButton_image' src='assets/icons8_trash.svg' alt='delete' width={16} height={16}></Image>
                </Button>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    )
  }
}

export default BookCarousel;