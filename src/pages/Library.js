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
        <Button variant="dark" onClick={this.handleShow} className="Library_searchButton">
          Search
        </Button>
        <AddBook show={this.state.showModal} handleClose={this.handleClose}/>
        </main>
      </>
    )
  }
}

export default Library;
