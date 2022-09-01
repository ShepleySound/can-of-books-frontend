import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class BookGrid extends React.Component {
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
      <div className='Grid'>
        {this.props.books.map(book => {
          return (
            <Card className='Grid_gridItem' key={book._id}>
              <Card.Img src ='assets/cover-unavailable-image.png' width={320} height={200}/>
              <Card.Body className='Grid_gridItem_content'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author}</Card.Subtitle>
                <p className=''>{book.description}</p>
                <p>{book.status ? 'You have read this book' : 'You have not read this book'}</p>
                <Card.Footer className=''>
                  <Button variant='secondary' className='' onClick={() => this.props.handleEdit(book)}>
                    <Image className='' src='assets/icons8_edit.svg' alt='delete' width={16} height={16}></Image>
                  </Button>
                  <Button variant='secondary' className='' onClick={() => this.handleDelete(book._id)}>
                    <Image className='' src='assets/icons8_trash.svg' alt='delete' width={16} height={16}></Image>
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    )
  }
}

export default BookGrid;