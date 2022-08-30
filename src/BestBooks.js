import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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

  render() {
    return (
      <>
        <main className='Main'>
          {this.state.books.length ? (
            <Carousel className="Carousel">
              {this.state.books.map(book => {
                return (
                  <Carousel.Item key={book._id}>
                    <img src ='https://source.unsplash.com/random/400x600' alt='Random' />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </main>
      </>
    )
  }
}

export default BestBooks;
