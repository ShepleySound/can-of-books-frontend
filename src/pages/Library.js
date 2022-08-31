import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddBook from '../components/AddBook';
import BookCarousel from '../components/BookCarousel';
import BookGrid from '../components/BookGrid';
import './Library.css';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedBook: {
        title: '',
        author: '',
        description: '',
        status: false,
        _id: '',
        __v: '',
      },
      showModal: false,
      formModalMode: 'add',
      libraryView: 'carousel',
    }
  }

  getBooks = async() => {
    try {
      const bookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`);
      this.setState({
        books: bookData.data
      });
    } catch (error) {
      console.error('Error in getBooks', error);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  handleShow = () => {
    const emptyBook = {
      title: '',
      author: '',
      description: '',
      status: false,
      _id: '',
      __v: '',
    }
    this.setState({ 
      showModal: true,
      formModalMode: 'add',
      selectedBook: emptyBook,
     })
  }
  
  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleEdit = (book) => {
    this.setState({
      showModal: true,
      formModalMode: 'edit',
      selectedBook: book,
    })
  }

  initFormFill = () => {

  }
  
  render() {
    return (
      <>
        <main className='Main'>
          {this.state.books.length && this.state.libraryView === 'carousel' ? (
            <BookCarousel books={this.state.books} getBooks={this.getBooks} handleEdit={this.handleEdit}/>
          ) : this.state.books.length && this.state.libraryView === 'grid' ? (
            <BookGrid books={this.state.books} getBooks={this.getBooks} handleEdit={this.handleEdit}/>
          ) : (
            <h3 className='text-white'>{`No Books Found :(`}</h3>
          )}
        <Button variant="light" onClick={this.handleShow} className="mt-3 searchButton">
          Add Book
        </Button>
        <AddBook 
          show={this.state.showModal}
          handleClose={this.handleClose} 
          getBooks={this.getBooks}
          {...this.state.selectedBook}
          formModalMode={this.state.formModalMode}/>
        </main>
      </>
    )
  }
}

export default Library;
