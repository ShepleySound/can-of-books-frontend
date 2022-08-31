import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';

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
      <Container>
        {this.props.books.map(book => {
          return (
            <div key={book._id}>
              <Image fluid src ='assets/cover-unavailable-image.png' width={320} height={200}/>
              <div className=''>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p className=''>{book.description}</p>
                <p>{book.status ? 'You have read this book' : 'You have not read this book'}</p>
                <div className=''>
                  <Button variant='secondary' className='' onClick={() => this.props.handleEdit(book)}>
                    <Image className='' src='assets/icons8_edit.svg' alt='delete' width={16} height={16}></Image>
                  </Button>
                  <Button variant='secondary' className='' onClick={() => this.handleDelete(book._id)}>
                    <Image className='' src='assets/icons8_trash.svg' alt='delete' width={16} height={16}></Image>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    )
  }
}

export default BookGrid;