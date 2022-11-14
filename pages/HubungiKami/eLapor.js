import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function eLapor() {
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
                              <div className ="row">
                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Saluran Informasi</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Petugas Lapangan</option>
                                    <option value="1">Portal Interaktif</option>
                                    <option value="2">Email</option>
                                    <option value="3">Panic Button</option>
                                    <option value="4">Medsos IG</option>
                                    <option value="5">Medsos Twitter</option>
                                    <option value="6">Medsos FB</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Kategori</Form.Label>
                                  <Form.Select>
                                    <option selected>Laporan</option>
                                    <option value="1">Pelayanan</option>
                                    <option value="2">Pengaduan</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Sub Kategori</Form.Label>
                                    <Form.Select>
                                      <option selected>Tindak Pidana</option>
                                      <option value="1">Bencana</option>
                                      <option value="2">Pelanggaran</option>
                                      <option value="3">Kemacetan</option>
                                      <option value="3">Kecelakaan</option>
                                    </Form.Select>
                                </div>
                              </div>

                              <div className ="row">
                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Status Jalan</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Jalan Nasional</option>
                                    <option value="1">Jalan Provinsi</option>
                                    <option value="2">Jalan Kota</option>
                                    <option value="3">Jalan Kabupaten</option>
                                    <option value="4">Jalan Desa</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Fungsi Jalan</Form.Label>
                                  <Form.Select>
                                    <option selected>Jalan Tol</option>
                                    <option value="1">Jalan Arteri</option>
                                    <option value="2">Jalan Kolektor</option>
                                    <option value="3">Jalan Lokal</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Jumlah Korban</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                              </div>

                              <div className ="row mb-4">
                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Kerusakan Object</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Bangunan</option>
                                    <option value="1">Motor</option>
                                    <option value="2">Mobil</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Situasi Lalin</Form.Label>
                                  <Form.Select>
                                    <option selected>Macet</option>
                                    <option value="1">Padat</option>
                                    <option value="2">Lancar</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Kebutuhan Peralatan</Form.Label>
                                  <Form.Select>
                                    <option selected>Mobil Patwal</option>
                                    <option value="1">Damkar</option>
                                    <option value="2">Mobil Derek</option>
                                    <option value="3">Ambulance</option>
                                  </Form.Select>
                                </div>
                              </div>

                              <div className ="row border">
                                <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Lokasi Kejadian</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Jam</Form.Label>
                                  <Form.Control type="time" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                <div className="col-lg-12 col-md-6 mb-4">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Lat Long</Form.Label>
                                    <div className="input-group mb-3">
                                      <Form.Control type="text" className="form-control" placeholder="Latitude" aria-label="Username" />
                                      <Form.Control type="text" className="form-control" placeholder="Longitude" aria-label="Server" />
                                      <span className="input-group-text"><i className="bx bx-map"></i></span>
                                    </div>
                                </div>
                              </div>


                              <Form.Label for="exampleInputEmail1" className="form-label">Upload Foto</Form.Label>
                              <div className="input-group mb-3">
                                <Form.Control type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                              </div>

                              <div className ="row">
                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Nama Pelapor</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Kategori Pelapor</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Pemerintah</option>
                                    <option value="1">Instansi Swasta</option>
                                    <option value="2">LSM</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">No. Telp</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                              </div>

                              <div className="col-lg-12 col-md-12">
                                <Button variant="primary" type="submit">
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
    </>
  )
}
