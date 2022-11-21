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
            <div className='col-md-4'>
              <div className="single-footer-widget">
                <ul className="social mt-1">
                  <p>Find us on social media :</p>
                  <li>
                    <Link href="https://www.tiktok.com/@smartcitybali?lang=en" className="tiktok" target="_blank">
                      <Image className="iconfooter" src="/images/tiktok.svg" width={30} height={30} alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/smartcity.bali/" className="instagaram" target="_blank">
                      <Image className="iconfooter" src="/images/instagram.svg" width={30} height={30} alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/eling_bali" className="twitter" target="_blank">
                      <Image className="iconfooter" src="/images/twitter.svg" width={30} height={30} alt=""/>
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#" className="linkedin" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              {/* <div className="copyright-area-content"> */}
                <Image className="mt-3" src="/images/logofooterW.svg" width={1239} height={251} alt="" />
              {/* </div> */}
            </div>
            <div className='col-md-4'>
               <div className="copyright-area-content">
                <p>
                  Copyright © , <a href="https://elingbali.com">
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