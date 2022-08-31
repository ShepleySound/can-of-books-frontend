import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddBook from '../components/AddBook';
import BookCarousel from '../components/BookCarousel';
import './Library.css'


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  getBooks = async() => {
    try {
      const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`);
      this.setState({
        books: bookData.data
      });
    } catch (error) {
      console.log('Error in getBooks', error);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }
  handleClose = () => {
    this.setState({ showModal: false })
  }
  
  render() {
    return (
      <>
        <main className='Main'>
          {this.state.books.length ? (
            <BookCarousel books={this.state.books} getBooks={this.getBooks}/>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        <Button variant="light" onClick={this.handleShow} className="mt-3 searchButton">
          Add Book
        </Button>
        <AddBook 
          show={this.state.showModal} 
          handleClose={this.handleClose} 
          getBooks={this.getBooks}
          title={''}
          author={''}
          description={''}
          hasRead={false}
          _id={''}/>
        </main>
      </>
    )
  }
}

export default Library;
