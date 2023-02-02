import React, { useState } from 'react'
import {
  BaseLayouts,
  SelectSaluranInformasi,
  SelectKategori,
  SelectSubKategori,
  InputCustom,
  SelectKategoriPelapor,
  StorageApi
} from '../../components/MainCode/MainImport';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSession } from "next-auth/react"
import Link from 'next/link';

export default function Eservice() {
  const { data: session, status } = useSession()
  const [tanggal, setTanggal] = useState('');
  const [saluran_informasi_id, setSaluranInformasi] = useState('')
  const [kategori_id, setKategoriId] = useState('');
  const [sub_kategori_id, setSubKategoriId] = useState('');
  const [kategori_param, setKategoriparam] = useState('');
  const [sub_kategori_param, setSubKategoriparam] = useState('');
  const [kategori_pelapor_id, setKategoriPelapor] = useState('');

  const KategoriPelayanan = (param) => {
    var table = ""
    param == "Informasi Kegiatan" ? table = "informasi_kegiatan"
      : param == "Informasi Laka" ? table = "informasi_laka"
        : param == "Informasi Tilang" ? table = "informasi_tilang"
          : param == "Informasi Data" ? table = "informasi_data"
            : param == "Turjawali" ? table = "turjawali"
              : param == "Pengesahan STNK & BPKB" ? table = "stnk_bpkb"
                : param == "Informasi Sekolah Mengemudi" ? table = "informasi_sekolah_mengemudi"
                  : param == "Permohonan Pengawalan & Pengamanan" ? table = "pengawalan_pengaman"
                    : param == "Permohonnan Uji Kompetensi" ? table = "uji_kompetensi"
                      : table = ""
    return table
  }

  const Simpan = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('tanggal', tanggal)
    formData.append('saluran_informasi_id', saluran_informasi_id)
    formData.append('kategori_id', kategori_id)
    formData.append('sub_kategori_id', sub_kategori_id)
    formData.append('nama_pelapor', session?.nama)
    formData.append('telp_pelapor', session?.telp)
    formData.append('kategori', kategori_param.toLowerCase())
    console.log(kategori_param);
    if (kategori_param == "Pelayanan") {
      const param = KategoriPelayanan(sub_kategori_param)
      formData.append('sub_kategori', param)
    }
    formData.append('kategori_pelapor_id', kategori_pelapor_id)
    formData.append('ctdby', session?.kode_user_master)
    formData.append('polda_id', session?.polda_id)
    formData.append('polres_id', session?.polres_id)
    Promise.resolve(StorageApi.addData('public_service', formData))
      .then(value => {
        reset_elm()
      }).catch(error => {
        console.log(error);
      })
  }



  return (
    <>
      <BaseLayouts>
        {/* <!-- Start Contact Area --> */}
        <section className="contact-area ptb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form ">
                  <div className="title mb-5">
                    <h3>E-Service</h3>
                    <p>People online aspiration and complaint service</p>
                    <hr />
                  </div>
                  <Form>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Saluran Informasi</Form.Label>
                        <SelectSaluranInformasi onChange={(e) => setSaluranInformasi(e.value)} value={saluran_informasi_id} placeholder="Pilih Saluran Informasi" />
                      </div>

                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Kategori</Form.Label>
                        <SelectKategori onChange={(e) => {
                          setKategoriId(e.value)
                          setKategoriparam(e.label)
                        }} value={kategori_id} placeholder="Pilih Kategori" param={"Pelayanan"} />
                      </div>

                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Sub Kategori</Form.Label>
                        <SelectSubKategori onChange={(e) => {
                          setSubKategoriId(e.value)
                          setSubKategoriparam(e.label)
                        }} value={sub_kategori_id} param={kategori_id} placeholder="Pilih Sub Kategori" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Kategori Pelapor</Form.Label>
                        <SelectKategoriPelapor onChange={(e) => setKategoriPelapor(e.value)} value={kategori_pelapor_id} placeholder="Kategori Pelapor" />
                      </div>

                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Nama Pelapor</Form.Label>
                        <InputCustom className="" type="text" placeholder="Nama Pelapor" value={session?.nama} readOnly />
                      </div>

                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Tanggal</Form.Label>
                        <InputCustom className="" type="date" placeholder="Tanggal" onChange={e => setTanggal(e.target.value)} />
                      </div>

                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">No. Telp</Form.Label>
                        <InputCustom className="" type="text" placeholder="Telp./CP" value={session?.telp} readOnly />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      {session ? (<>
                        <Button variant="primary" onClick={e => Simpan(e)}>
                          Kirim
                        </Button>
                      </>) : (<>
                        <Link href="/Login" className='text-white'>
                          <Button variant="primary">
                            Sign In
                          </Button>
                        </Link>
                      </>)}
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Area --> */}
      </BaseLayouts>
      {/* <ModalBox title={"Show Maps"} handleClose={e => ShowModal("close")} show={show}>
        <div className='maps'>
          <Map lat={(e) => setLat(e)} lng={(e) => setLng(e)} address={(e) => setNamaJalanId(e)} />
        </div>
      </ModalBox> */}
    </>
  )
}
