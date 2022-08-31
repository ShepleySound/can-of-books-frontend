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
      author: '',
      description: '',


    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const bookSearch = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}+inauthor:${this.state.author}&printType=books&projection=lite&maxResults=5`)
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (target.type === 'checkbox') {
      this.setState({
        [name]: target.checked,
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book to Library</Modal.Title>
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
            <Form.Group className='mb-3' controlId="BookSearchForm.description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" checked={false} onChange={this.handleInputChange} placeholder="Enter Description..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.hasRead">
              <Form.Check type="switch" id="read-switch" label="Have you read this book?" name="hasRead" value={this.state.hasRead} onChange={this.handleInputChange}/>
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit" onClick={this.handleSubmit}>
              Add Book
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    )
  }

}

export default AddBook
