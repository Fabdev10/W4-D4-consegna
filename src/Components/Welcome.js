import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomForm from './CustomForm';

function Welcome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Alert variant="danger">
         You are not registered to the site! Click on the button below to register!
        </Alert>
            <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Registration form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <CustomForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Welcome;