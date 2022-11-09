// import { Button, Avatar } from 'antd';
// import { StorageApi } from "../MainCode/MainImport"
// import { Disclosure } from '@headlessui/react';
// import { getCsrfToken, useSession, signIn, signOut, getSession } from "next-auth/react"
import { React } from "react";
// import styles from '/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar(props) {
    return (
   <>
   <div className="copyright-area">
        <div className="container">
          <div className='row'>
            <div className='col-md-6'>
              <div className="single-footer-widget">
                <ul className="social mt-1">
                  <p>Find us on social media :</p>
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter" target="_blank">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
               <div className="copyright-area-content">
                <p>
                  Copyright © , by
                  <a href="https://envytheme.com/" target="_blank">
                    Eling Bali Developer
                  </a>
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
   </>
  )
}