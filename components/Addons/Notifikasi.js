import React from 'react'
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';
import ToastContainer from 'react-bootstrap/ToastContainer';

<<<<<<< HEAD
export default function Notifikasi(props) {
=======
export default function Notifikasi (props) {
>>>>>>> 4e94f3800d54a04b0e8ffcdc2cad8daaddbbe134
  return (
    <div>
      <ToastContainer className="p-3" position={'top-center'}>
        <Toast onClose={props.onClose} show={props.show}>
          <Toast.Header closeButton={true}>
            <Image
              src="/images/icon-jepun.png"
              className="rounded me-2"
              alt=""
              width={30}
            />
            <strong className="me-auto">Portal Bali</strong>
          </Toast.Header>
          <Toast.Body>{props.body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}
