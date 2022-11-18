import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Notifikasi(props) {
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
              height={30}
            />
            <strong className="me-auto">Portal Bali</strong>
          </Toast.Header>
          <Toast.Body>{props.body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}
