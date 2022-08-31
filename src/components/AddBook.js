import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      author: this.props.author,
      description: this.props.description,
      status: this.props.status,
      id: this.props._id,
    }
  }
  // Initialize function to be called on show. Syncs the opened modal with props, but still allows for further user interaction.
  initFormData = () => {
    this.setState({
      title: this.props.title,
      author: this.props.author,
      description: this.props.description,
      status: this.props.status,
      id: this.props._id,
      v: this.props.__v,
    })
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/books`, 
      {
        'title': this.state.title,
        'author': this.state.author,
        'description': this.state.description,
        'status': this.state.status,
      });
      this.props.getBooks();
      this.props.handleClose();
    } catch (error) {
      console.error("Error in handleSubmit", error)
    }
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
    let modalTitle = '';
    if (this.props.formModalMode === 'add') {
      modalTitle = 'Add Book to Library'
    } else if (this.props.formModalMode === 'edit') {
      modalTitle = 'Edit Book'
    }
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose} onShow={this.initFormData}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
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
              <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Enter Description..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.status">
              <Form.Check type="switch" id="read-switch" label="Have you read this book?" checked={this.state.status} name="status" onChange={this.handleInputChange}/>
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
