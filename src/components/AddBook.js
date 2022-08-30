import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: ''
    }
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

  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Public Book Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className='mb-3' controlId="BookSearchForm.title">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Enter title..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.author">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" value={this.state.author} onChange={this.handleInputChange} placeholder="Enter author name..."></Form.Control>
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit" onClick={this.handleSubmit}>
              Add Book
            </Button>
          </Form>

          </Modal.Body>
          <Modal.Footer>
          <small>Search powered by Google Books</small>
          </Modal.Footer>
      </Modal>
    )
  }

}

export default AddBook
