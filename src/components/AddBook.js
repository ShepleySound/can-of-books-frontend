import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      author: this.props.author,
      description: this.props.description,
      status: this.props.status,
      id: this.props._id,
      isLoading: false,
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

  later = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

  postNewBook = async () => {
    try {
      this.setState({
        isLoading: true
      })
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/books`, 
        {
          'title': this.state.title,
          'author': this.state.author,
          'description': this.state.description,
          'status': this.state.status,
        });

    } catch (error) {
      throw new Error(error)
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  updateBook = async () => {
    try {
      this.setState({
        isLoading: true
      })
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/books/${this.state.id}`, 
        {
          'title': this.state.title,
          'author': this.state.author,
          'description': this.state.description,
          'status': this.state.status,
          '__v': this.state.v + 1
        });
    } catch (error) {

      throw new Error(error)
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (this.props.formModalMode === 'add') {
        await this.postNewBook();
      } else if (this.props.formModalMode === 'edit') {
        await this.updateBook();
      }
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
              <Form.Control required type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Enter title..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.author">
              <Form.Label>Author</Form.Label>
              <Form.Control required name="author" value={this.state.author} onChange={this.handleInputChange} placeholder="Enter author name..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.description">
              <Form.Label>Description</Form.Label>
              <Form.Control required as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Enter Description..."></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="BookSearchForm.status">
              <Form.Check type="switch" id="read-switch" label="Have you read this book?" checked={this.state.status} name="status" onChange={this.handleInputChange}/>
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit" >
              {this.state.isLoading ? (
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
                size="sm"/>
              ) : this.props.formModalMode === 'add' ? (
                <span>Add Book</span>)
                  : this.props.formModalMode === 'edit' ? (
                  <span>Edit Book</span>) : (<span>Broken</span>)
              }
            </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )
  }

}

export default AddBook
