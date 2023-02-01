import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Head from 'next/head'
import {
    InputCustom,
    Notifikasi,
    SelectCustom,
    SelectPolres,
    StorageApi,
    Textarea,
} from "../components/MainCode/MainImport"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getCsrfToken, useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import moment from 'moment';



export default function Login() {
    const router = useRouter();
    const { data: session, status } = useSession()
    const [ok, setOk] = useState(false)
    const [alamat, setAlamat] = useState("");
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [telp, setTelp] = useState("");
    const [jenis_kelamin, setJenisKelamin] = useState("");
    const [tgl_lahir, setTglLahir] = useState("");
    const [polres_id, setPolresId] = useState("");
    const [nik, setNik] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState(false);
    const [notif_body, setNotifBody] = useState("");

    useEffect(() => {

    }, [ok])
    const reset_elm = () => {
        setOk(true)
        setAlamat('')
        setEmail('')
        setNama('')
        setJenisKelamin('')
        setTglLahir('')
        setPolresId('')
        setNik('')
        setPassword('')
        setNama('')
        setTelp('')
    }

    const Simpan = () => {
        const formData = new FormData()
        formData.append('kode_jenis_user', 'EXTERNAL')
        formData.append('polda_id', "17")
        formData.append('nama', nama)
        formData.append('polres_id', polres_id)
        formData.append('tgl_lahir', tgl_lahir)
        formData.append('jenis_kelamin', jenis_kelamin)
        formData.append('email', email)
        formData.append('nik', nik)
        formData.append('password', password)
        formData.append('kesatuan', "POLRES")
        formData.append('kode_unit', "SM_UMUM")
        formData.append('telp', telp)
        formData.append('alamat', alamat)
        formData.append('kode_sub_unit', "SM_UMUM_MASYARAKAT")
        formData.append('ctdby', "")
        formData.append('ctddate', moment().format("YYYY-MM-DD"))
        formData.append('ctdtime', moment().format("HH:mm:ss"))
        Promise.resolve(StorageApi.addData("sm_hrm/user_master", formData))
            .then(value => {
                setNotifBody("Selamat Anda berhasil register, Silahkan cek email anda untuk verifikasi data")
                setNotif(true)
                reset_elm();
            }).catch(error => {
                setNotifBody("Gagal melakukan register")
                setNotif(false)
            })
    }
    return (
        <>
            <Head>
                <title>Form Register</title>
               
            </Head>
            <section id="main">
                <video src="/images/video.mp4" muted autoPlay loop></video>
                <Notifikasi onClose={e => setNotif(!notif)} show={notif} body={notif_body} />
                <Form>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='bg-biru text-white my-5 mx-auto' style={{ borderRadius: '1rem', width: '900px' }}>
                                <div className='p-5  flex-column align-items-center mx-auto'>
                                    <div className='text-center'>
                                        <Image className="mb-4" src="/images/logo2.png" width={90} height={90} alt="" />
                                        <h2 className="fw-bold mb-4 text-2xl text-white text-center">Form Register</h2>
                                    </div>
                                    <div className='row'>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">NIK</Form.Label>
                                            <InputCustom className="" type="number" placeholder="NIK" value={nik} onChange={e => setNik(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Nama Lengkap</Form.Label>
                                            <InputCustom className="" type="text" placeholder="Nama Lengkap" onChange={e => setNama(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Jenis Kelamin</Form.Label>
                                            <SelectCustom onChange={(e) => setJenisKelamin(e.value)} value={jenis_kelamin} placeholder="Jenis Kelamin">
                                                {
                                                    [
                                                        { label: <p style={{ color: "black" }}>Laki-laki</p>, value: 'L' },
                                                        { label: <p style={{ color: "black" }}>Perempuan</p>, value: 'P' },
                                                    ]
                                                }
                                            </SelectCustom>
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">No. Telp</Form.Label>
                                            <InputCustom className="" type="number" placeholder="No. Telp" onChange={e => setTelp(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Tanggal Lahir</Form.Label>
                                            <InputCustom className="" type="date" placeholder="Tanggal Lahir" value={tgl_lahir} onChange={e => setTglLahir(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Provinsi</Form.Label>
                                            <InputCustom className="" type="text" placeholder="Nama Lengkap" value={"Provinsi Bali"} onChange={e => setPoldaId(e.target.value)} readOnly />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Kota/Kabupaten</Form.Label>
                                            <SelectPolres onChange={(e) => setPolresId(e.value)} value={polres_id} param={17} placeholder="Pilih Kota/Kabupaten" />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Email</Form.Label>
                                            <InputCustom className="" type="mail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Username</Form.Label>
                                            <InputCustom className="" type="text" placeholder="Username" value={nik} readOnly />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mb-3">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Password</Form.Label>
                                            <InputCustom className="" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="col-lg-8 col-md-4 mb-4">
                                            <Form.Label for="exampleInputPassword1" className="form-label">Alamat</Form.Label>
                                            <Textarea
                                                rows="3"
                                                name="keterangan"
                                                placeholder="Alamat"
                                                value={alamat}
                                                onChange={e => setAlamat(e.target.value)}
                                            />   
                                        </div>
                                    </div>
                                        
                                    <Button className='col-lg-2 col-md-2 mb-4' variant="success" onClick={e => Simpan(e)}>
                                        <p className='text-white'>Daftar</p>
                                    </Button>

                                    <div>
                                        <p className="text-abu mb-0 text-center">Dont have an account ?
                                            <Link href="/Login" className='text-white'> Sign In</Link>
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
