import { Modal,ModalBody,ModalFooter,ModalHeader } from 'reactstrap';

// create model useing reactstrap and useState the modal should include the text "thank you for your submission, we will be in touch shortly" and a button that says "close //

const Successmodal = ({isOpen,toggle,resetForm}) => {
  const handleClose = () => {
    resetForm(); // Call the resetForm function to reset the form
    toggle();    // Close the modal
};
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle} style={{color: 'blue', marginTop: '150px'}}>Don't worry, we'll work our magic and have your console gaming-ready in no time!</ModalHeader>
            <ModalBody>
                We will be in touch shortly!
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary btn-md service-button btn-outline-dark text-black rounded-pill' onClick={handleClose}>Close</button>{' '}
            </ModalFooter>
        </Modal>
    );
}

export default Successmodal;
