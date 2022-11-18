import React, { useState } from 'react'
import Image from 'next/image'
import {
  BaseLayouts,
  SelectSaluranInformasi,
  SelectKategori,
  SelectSubKategori,
  SelectSituasiLalin,
  InputCustom,
  SelectKategoriPelapor,
  ModalBox,
  Map,
  Textarea,
  StorageApi
} from '../../components/MainCode/MainImport';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSession } from "next-auth/react"

export default function eLapor() {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession()
  const [tanggal, setTanggal] = useState('');
  const [saluran_informasi_id, setSaluranInformasi] = useState('')
  const [kategori_id, setKategoriId] = useState('');
  const [sub_kategori_id, setSubKategoriId] = useState('');
  const [kategori_param, setKategoriparam] = useState('');
  const [sub_kategori_param, setSubKategoriparam] = useState('');
  const [nama_jalan_id, setNamaJalanId] = useState('');
  const [penjelasan_singkat, setPenjelasanSingkat] = useState('');
  const [kategori_pelapor_id, setKategoriPelapor] = useState('');
  const [telp, setTelp] = useState('');
  const [nama, setNamaPelapor] = useState('');

  const [situasi_lalin_id, setSituasiLalin] = useState('');
  const [korban, setJumlahKorban] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');


  const ShowModal = (param) => {
    setShow(true)

    if (param == "close") {
      setShow(false)
    }
  }

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
    formData.append('nama_jalan_s', nama_jalan_id)
    formData.append('lat', lat)
    formData.append('lng', lng)
    formData.append('jml_korban', korban)
    formData.append('situasi_lalin_id', situasi_lalin_id)
    formData.append('penjelasan_singkat', penjelasan_singkat)
    formData.append('nama_pelapor', nama)
    formData.append('telp_pelapor', telp)
    formData.append('kategori', kategori_param.toLowerCase())
    if (kategori_param == "Pelayanan") {
      const param = KategoriPelayanan(sub_kategori_param)
      formData.append('sub_kategori', param)
    } else {
      formData.append('sub_kategori', sub_kategori_param.toLowerCase().replace(" ", "_"))
    }
    formData.append('kategori_pelapor_id', kategori_pelapor_id)
    // formData.append('ctdby', session?.kode_user_master)
    // formData.append('polda_id', session?.polda_id)
    // formData.append('polres_id', session?.polres_id)
    fileAdd.map(item => {
      formData.append('images[]', item.files)
      formData.append('keterangan[]', item.keterangan)
    })
    debugger
    Promise.resolve(StorageApi.addData('public_service', formData))
      .then(value => {
        reset_elm()
      }).catch(error => {
        console.log(error);
      })
  }

  const [fileAdd, setFileAdd] = useState([
    { id: '', files: '', keterangan: '' },
  ])

  const addFileAdd = () => {
    let object = {
      files: '',
      keterangan: ''
    }
    setFileAdd([...fileAdd, object])
  }
  const handleFileAdd = (event, index) => {
    let data = [...fileAdd];
    if (event.target.name == "files") {
      data[index][event.target.name] = event.target.files[0];
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setFileAdd(data);
  }

  const removeFileAdd = (index) => {
    let data = [...fileAdd];
    data.splice(index, 1)
    setFileAdd(data);
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
                    <h3>E-Lapor</h3>
                    <p>People online aspiration and complaint service</p>
                    <hr />
                  </div>
                  <Form>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Saluran Informasi</Form.Label>
                        <SelectSaluranInformasi onChange={(e) => setSaluranInformasi(e.value)} value={saluran_informasi_id} placeholder="Pilih Status Jalan" />
                      </div>

                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Kategori</Form.Label>
                        <SelectKategori onChange={(e) => {
                          setKategoriId(e.value)
                        }} value={kategori_id} placeholder="Pilih Kategori" />
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
                        <Form.Label for="exampleInputEmail1" className="form-label">Jumlah Korban</Form.Label>
                        <InputCustom className="" type="text" placeholder="Jumlah Korban" onChange={e => setJumlahKorban(e.target.value)} />
                      </div>
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputEmail1" className="form-label">Situasi Lalin</Form.Label>
                        <SelectSituasiLalin onChange={(e) => setSituasiLalin(e.value)} value={situasi_lalin_id} placeholder="Pilih Situasi Lalin" />
                      </div>
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Kategori Pelapor</Form.Label>
                        <SelectKategoriPelapor onChange={(e) => setKategoriPelapor(e.value)} value={kategori_pelapor_id} placeholder="Kategori Pelapor" />
                      </div>
                    </div>

                    <div className="row border mb-3">
                      <div className="col-lg-6 col-md-6 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Lokasi Kejadian</Form.Label>
                        <InputCustom className="" type="text" placeholder="Lokasi Kejadian" onChange={e => setNamaJalanId(e.target.value)} />
                      </div>

                      <div className="col-lg-6 col-md-6 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Tanggal</Form.Label>
                        <InputCustom className="" type="date" placeholder="Tanggal" onChange={e => setTanggal(e.target.value)} />
                      </div>

                      <div className="col-lg-12 col-md-6 mb-4">
                        <Form.Label for="exampleInputPassword1" className="form-label">Lat Long</Form.Label>
                        <div className="input-group mb-3">
                          <InputCustom className="" type="text" placeholder="Latitude" onChange={e => setLat(e.target.value)} />
                          <InputCustom className="" type="text" placeholder="Longitude" onChange={e => setLng(e.target.value)} />
                          <span className="input-group-text" onClick={(e) => ShowModal("Show Map")}><i className="bx bx-map"></i></span>
                        </div>
                      </div>
                    </div>

                    <div className="row border mb-3">
                      <div className="w-full">
                        <div className='row mt-2'>
                          <div className='col-lg-9 col-md-9 mb-3 object-center'>
                            <p className='text-white'>Bukti Laporan</p>
                          </div>
                          <div className='col-lg-3 col-md-3 mb-3'>
                            <Button variant="success" onClick={addFileAdd}>
                              Add More..
                            </Button>
                          </div>
                        </div>
                        {fileAdd.map((form, index) => {
                          return (
                            <>
                              <div className="p-1" key={index}>
                                <div className="row">
                                  <div className='flex col-md-11'>
                                    <div className='row'>
                                      <div className='col-lg-6 col-md-6 mb-3'>
                                        <InputCustom
                                          className=""
                                          type="file"
                                          name="files"
                                          onChange={event => handleFileAdd(event, index)}
                                        />
                                      </div>
                                      <div className='col-lg-6 col-md-6'>
                                        <Textarea
                                          rows="1"
                                          name="keterangan"
                                          placeholder="Keterangan"
                                          onChange={event => handleFileAdd(event, index)}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-md-1'>
                                    <Button variant="danger" onClick={() => removeFileAdd(index)}>
                                      X
                                    </Button>
                                  </div>

                                </div>
                                {
                                  typeof form.files == "object" || form.files == '' ? <><div className=''>Select File : <b> {form.files.name}</b></div></> : <></>
                                }
                              </div>
                            </>
                          )
                        })}
                        <ul className="font-bold">
                          <li >Ukuran file maksimal : <span className="text-red">2 Mb</span> </li>
                          <li >Format File : <span className="text-red">jpg,png,pdf</span> </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">Nama Pelapor</Form.Label>
                        <InputCustom className="" type="text" placeholder="Nama Pelapor" value={session?.nama} readOnly />
                      </div>
                      <div className="col-lg-4 col-md-4 mb-3">
                        <Form.Label for="exampleInputPassword1" className="form-label">No. Telp</Form.Label>
                        <InputCustom className="" type="text" placeholder="Telp./CP" value={session?.telp} readOnly />
                      </div>
                    </div>



                    <div className="col-lg-12 col-md-12">
                      <Button variant="primary" onClick={e => Simpan(e)}>
                        Kirim
                      </Button>
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
      <ModalBox title={"Show Maps"} handleClose={e => ShowModal("close")} show={show}>
        <div className='maps'>
          <Map lat={(e) => setLat(e)} lng={(e) => setLng(e)} address={(e) => setNamaJalanId(e)} />
        </div>
      </ModalBox>
    </>
  )
}
