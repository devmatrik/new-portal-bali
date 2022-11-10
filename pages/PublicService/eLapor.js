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
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Group className="mb-3 mt-4">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Jenis Laporan</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Jenis Laporan</option>
                                    <option value="1">Kecelakaan</option>
                                    <option value="2">Kemacetan</option>
                                    <option value="3">Pelanggaran</option>
                                    <option value="4">Gangguan Lalu Lintas</option>
                                    <option value="5">Insfrastruktur Jalan</option>
                                    <option value="6">Tindak Pidanan di Jalan</option>
                                  </Form.Select>
                                </Form.Group>
                              </Form.Group>

                              <div className ="row">
                                <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Lokasi Kejadian</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Jam</Form.Label>
                                  <Form.Control type="time" className="form-control" id="exampleInputPassword1" />
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-6 mb-4">
                                <Form.Label for="exampleInputPassword1" className="form-label">Lat Long</Form.Label>
                                  <div className="input-group mb-3">
                                    <Form.Control type="text" className="form-control" placeholder="Latitude" aria-label="Username" />
                                    <Form.Control type="text" className="form-control" placeholder="Longitude" aria-label="Server" />
                                    <span className="input-group-text"><i className="bx bx-map"></i></span>
                                  </div>
                              </div>

                              <div className ="row">
                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Jenis Kecelakaan</Form.Label>
                                  <Form.Select>
                                    <option selected>Kecelakaan Tunggal</option>
                                    <option value="1">R2 vs R2</option>
                                    <option value="2">R4 vs R4</option>
                                    <option value="3">R2 vs R4</option>
                                    <option value="1">R4 vs R4</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Korban Meninggal Dunia</Form.Label>
                                  <Form.Select>
                                    <option selected>Ada</option>
                                    <option value="1">Tidak Ada</option>
                                  </Form.Select>
                                </div>

                                <div className="col-lg-4 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Perkiraan Jumlah Korban</Form.Label>
                                    <Form.Select>
                                      <option selected>1 - 2 Orang</option>
                                      <option value="1">2 - 3 Orang</option>
                                      <option value="2">{'>'}5 Orang</option>
                                    </Form.Select>
                                </div>
                              </div>

                              <Form.Label for="exampleInputEmail1" className="form-label">Upload Foto</Form.Label>
                              <div className="input-group mb-3">
                                <Form.Control type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                              </div>

                              <div className ="row">
                                <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Pelapor</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="col-lg-6 col-md-6 mb-3">
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
