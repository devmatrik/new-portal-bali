import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import Head from 'next/head'
import { InputCustom, Notifikasi } from "../components/MainCode/MainImport"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getCsrfToken, useSession, signIn, signOut } from "next-auth/react"



export default function Login() {
    const router = useRouter();
    const { data: session, status } = useSession()
    const [ok, setOk] = useState(false)
    const [cfr, setCfr] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState(false);
    const [notif_body, setNotifBody] = useState("");

    useEffect(() => {
        cfrToken()
    }, [ok])

    const cfrToken = async () => {
        const c = await getCsrfToken();
        setCfr(c)
    }

    const Login = async (e) => {
        e.preventDefault();
        setOk(false)
        await signOut({
            redirect: false
        });


        const res = await signIn('credentials', {
            redirect: false,
            username: username,
            password: password,
            callbackUrl: `${window.location.origin}`,
        });
        if (res?.error) {
            setNotif(true)
            setNotifBody("Tidak dapat login, periksa kembali Nik dan Password anda!")
            setOk(false)
        } else {
            setNotif(true)
            setNotifBody("Selamat Anda berhasil Login")
            router.push("/HubungiKami/eLapor")
            setOk(true)
        }
    }
    return (
        <>
            <Head>
                <title>Form Login</title>
               
            </Head>
            <section id="main">
                <video src="/images/video.mp4" muted autoPlay loop></video>
                <Notifikasi onClose={e => setNotif(!notif)} show={notif} body={notif_body} />
                <Form>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', width: '500px' }}>
                                <div className='p-5 flex-column align-items-center mx-auto'>
                                    <div className='text-center'>
                                        <Image className="mb-4" src="/images/logo2.png" width={90} height={90} alt="" />
                                        <h2 className="fw-bold mb-4 text-2xl text-white text-center">Form Login</h2>
                                        <div className="mb-3">
                                            <InputCustom className="" type="text" placeholder="Nik" onChange={e => setUsername(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <InputCustom className="" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <Button variant="success" onClick={e => Login(e)}>
                                        <p className="login">Login</p>
                                    </Button>
                                    <div>
                                        <p className="mb-0 text-center">Dont have an account ?
                                            <Link href="/Register" className='text-white'> Sign Up</Link>
                                            {/* <a href="#!" class="text-white-50 fw-bold"></a> */}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Form>
                {/* <Footer>
            
        </Footer> */}
            </section>
        </>
    )
}
