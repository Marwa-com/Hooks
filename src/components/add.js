
import React, { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setTitle('')
        setImageUrl('')
        setDescription('')
        setRating('')
        setShow(false)
    };
    const handleShow = () => setShow(true);
    
  
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleSave =()=>{

      addMovie({
        title,
        imageUrl,
        description,
        rating
      })
      handleClose()
  }

    return (
      <>
          <Button style={{ width:150, height:40, backgroundColor:"rgb(27, 27, 236)" ,color:"white", marginLeft:200}} 
          variant="primary" onClick={handleShow}>
        New Movie
      </Button>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
          <Form.Control placeholder="imageUrl" onChange={(e)=>setImageUrl(e.target.value)}/>
          <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
          <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
          
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  };
  
  export default Add;
