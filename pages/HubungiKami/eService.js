import React from 'react'
import Image from 'next/image'
import BaseLayouts from '../../components/MainCode/BaseLayouts'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export default function eService() {
  return (
    <>
      <BaseLayouts>
      <section className="contact-area ptb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <div className="contact-form">
                            <div className="title mb-5">
                                <h3>E-Service</h3>
                                <p>People online aspiration and complaint service</p>
                                <hr />
                            </div>

                            <Form>
                                <div className="mb-3 mt-4">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Jenis Service</Form.Label>
                                  <Form.Select>
                                    <option selected disabled>Jenis Service</option>
                                    <option value="1">Permohonan Pengawalan</option>
                                    <option value="2">Permohonan Uji Kompetensi SIM</option>
                                  </Form.Select>
                                </div>

                                <div className ="row">
                                  <div className="col-lg-6 col-md-6 mb-3">
                                  <Form.Label for="exampleInputPassword1" className="form-label">Nama</Form.Label>
                                  <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                  </div>

                                  <div className="col-lg-6 col-md-6 mb-3">
                                    <Form.Label for="exampleInputPassword1" className="form-label">No. Telp</Form.Label>
                                    <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                  </div>
                                </div>

                                <div className="col-lg-12 col-md-4 mb-3">
                                  <Form.Label for="exampleInputEmail1" className="form-label">Email</Form.Label>
                                  <Form.Control type="email" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className ="row">
                                  <div className="col-lg-6 col-md-6 mb-3">
                                    <Form.Label for="exampleInputEmail1" className="form-label">Untuk Kegiatan</Form.Label>
                                    <Form.Select>
                                      <option selected>Kegiatan</option>
                                      <option value="1">Pribadi</option>
                                      <option value="1">Bisnis</option>
                                      <option value="1">Sosial</option>
                                      <option value="1">Ormas</option>
                                    </Form.Select>
                                  </div>

                                  <div className="col-lg-6 col-md-6 mb-3">
                                    <Form.Label for="exampleInputEmail1" className="form-label">Jenis Kegiatan</Form.Label>
                                    <Form.Control type="text" className="form-control" id="exampleInputPassword1" />
                                  </div>
                                </div>

                                <Table className="table table-bordered mt-2">
                                    <thead>
                                      <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Dokumen Diperlukan</th>
                                        <th scope="col">Upload</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1</th>
                                        <td>Foto KTP</td>
                                        <td><input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" /></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>SIM Lama</td>
                                        <td><input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" /></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Sertifikat Sekolah Mengemudi</td>
                                        <td><input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" /></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>Foto Cek Kesehatan</td>
                                        <td><input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" /></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Foto Bukti Lunas Administrasi</td>
                                        <td><input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" /></td>
                                      </tr>
                                     
                                    </tbody>
                                  </Table>

                                <div className="col-lg-12 col-md-12">
                                  <Button type="submit" variant="primary">Kirim</Button>
                                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                                  <div className="clearfix"></div>
                                </div>
                            </Form>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </BaseLayouts>
    </>
  )
}