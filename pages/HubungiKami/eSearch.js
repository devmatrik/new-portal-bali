import React, { useState } from 'react'
import {
  BaseLayouts,
  SelectCustom,
  SelectSaluranInformasi,
  SelectKategori,
  SelectSubKategori,
  InputCustom,
  SelectKategoriPelapor,
  StorageApi,
  SelectJenisKendaraan,
  Textarea
} from '../../components/MainCode/MainImport';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSession } from "next-auth/react"
import Link from 'next/link';

export default function Esearch() {
  const { data: session, status } = useSession()
  const [tanggal, setTanggal] = useState('');
  const [nama_jalan_s, setNamaJalanId] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [nopol, setNopol] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [jenis_kendaraan_id, setJenisKendaraan] = useState('');
  const [warna_kendaraan, setWarnaKendaraan] = useState('');
  const [lokasi_terakhir, setLokasiTerakhir] = useState('');
  const [kategori_pencarian, setKategoriPencarian] = useState('')
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
    formData.append('kategori_pencarian', kategori_pencarian)
    formData.append('kategori_id', kategori_id)
    formData.append('sub_kategori_id', sub_kategori_id)
    formData.append('nama_pelapor', session?.nama)
    formData.append('telp_pelapor', session?.telp)
    formData.append('kategori', kategori_param.toLowerCase())
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
                    <h3>E-Search</h3>
                    <p>We can help you find your lost item</p>
                    <hr />
                  </div>
                  <Form>
                    <div className="row">
                      <div className="col-lg-6 col-md-4 mb-3">
                        <Form.Label htmlFor="exampleInputEmail1" className="form-label">Kategori Pencarian</Form.Label>
                        <SelectCustom onChange={(e) => setKategoriPencarian(e.value)} value={kategori_pencarian} placeholder="Kategori Pencarian">
                          {
                            [
                              { label: 'Pencarian Object', value: 'object' },
                              { label: 'Pencarian Orang', value: 'orang' },
                            ]
                          }
                        </SelectCustom>
                      </div>

                      {kategori_pencarian == "orang" ? (<>
                        <div className="col-lg-6 col-md-4 mb-3">
                          <Form.Label htmlFor="exampleInputPassword1" className="form-label">Nama Lengkap</Form.Label>
                          <InputCustom className="" type="text" placeholder="Nama Lengkap" />
                        </div>
                        <div className="col-lg-12 col-md-4 mb-3">
                          <Form.Label htmlFor="exampleInputPassword1" className="form-label">Foto</Form.Label>
                          <InputCustom className="" type="file" />
                        </div>
                        <div className="col-lg-6 col-md-4 mb-3">
                          <Form.Label htmlFor="exampleInputPassword1" className="form-label">Tempat Lahir</Form.Label>
                          <InputCustom className="" type="text" placeholder="Tempat Lahir" />
                        </div>
                        <div className="col-lg-6 col-md-4 mb-3">
                          <Form.Label htmlFor="exampleInputPassword1" className="form-label">Tanggal Lahir</Form.Label>
                          <InputCustom className="" type="date" placeholder="Tanggal Lahir" />
                        </div>

                        <div className="row border mb-3 mt-3 p-3">
                          <div className="col-lg-6 col-md-6 mb-3">
                            <Form.Label for="exampleInputPassword1" className="form-label">Nama Jalan</Form.Label>
                            <InputCustom className="" type="text" placeholder="Nama Jalan" value={nama_jalan_s} onChange={e => setNamaJalanId(e.target.value)} />
                          </div>

                          <div className="col-lg-6 col-md-6 mb-3">
                            <Form.Label for="exampleInputPassword1" className="form-label">Kecamatan</Form.Label>
                            <InputCustom className="" type="text" placeholder="Kecamatan" value={kecamatan} onChange={e => setKecamatan(e.target.value)} />
                          </div>

                          <div className="col-lg-6 col-md-6 mb-3">
                            <Form.Label for="exampleInputPassword1" className="form-label">Kabupaten</Form.Label>
                            <InputCustom className="" type="text" placeholder="Kabupaten" value={kabupaten} onChange={e => setKabupaten(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Keterangan</Form.Label>
                          <Textarea
                            rows="3"
                            name="keterangan"
                            placeholder="Keterangan"
                            onChange={e => setKeterangan(e.target.value)}
                          />
                        </div>
                      </>) : (<></>)}

                      {kategori_pencarian == "object" ? (<>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Nopol</Form.Label>
                          <InputCustom className="" type="text" placeholder="Nopol" value={nopol} onChange={e => setNopol(e.target.value)} />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Jenis Kendaraan</Form.Label>
                          <SelectJenisKendaraan onChange={(e) => setJenisKendaraan(e.value)} value={jenis_kendaraan_id} placeholder="Jenis Kendaraan" />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Warna Kendaraan</Form.Label>
                          <InputCustom className="" type="text" placeholder="Warba Kendaraan" value={warna_kendaraan} onChange={e => setWarnaKendaraan(e.target.value)} />
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Lokasi Terakhir</Form.Label>
                          <InputCustom className="" type="text" placeholder="Lokasi Terakhir" value={lokasi_terakhir} onChange={e => setLokasiTerakhir(e.target.value)} />
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                          <Form.Label for="exampleInputPassword1" className="form-label">Keterangan</Form.Label>
                          <Textarea
                            rows="3"
                            name="keterangan"
                            placeholder="Keterangan"
                            onChange={e => setKeterangan(e.target.value)}
                          />
                        </div>
                      </>) : (<></>)}

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
    </>
  )
}
