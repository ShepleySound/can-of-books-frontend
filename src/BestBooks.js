import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Form } from 'react-bootstrap';
import SearchBooks from './SearchBooks';
import BookCarousel from './BookCarousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: '',
      author: '',
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

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Title:", this.state.title)
    console.log("Author:", this.state.author)

    const bookSearch = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}+inauthor:${this.state.author}&printType=books&projection=lite&maxResults=5`)
    console.log(bookSearch.data)
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
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
            <BookCarousel books={this.state.books}/>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        <Button variant="dark" onClick={this.handleShow}>
          Search
        </Button>
        <SearchBooks show={this.state.showModal} handleClose={this.handleClose}/>
        </main>
      </>
    )
  }
}

export default BestBooks;
