// const url = "http://localhost:8082";
// const url = "http://smbali.estrada.co.id:8082";
const url = "https://backend.elingbali.com:8082";
// const url = "http://202.134.4.213:8082";
// const url = "http://192.168.8.18:8082";
const kode_app = "SM_UMUM";
const data = function (data) {

}


data.url = url;
data.kode_app = kode_app;

// data.verify = (data) => {
//   if (data != "" && data != "undefined" && data != undefined && data != "null" && data != null) {
//     return data;
//   }

//   return null;
// }

data.config = (method, tujuan, data, id) => {
  var mainurl = '';
  var content = '';
  if (!id) {
    mainurl = `${url}/api/v.0.1/${tujuan}`;
  } else {
    mainurl = `${url}/api/v.0.1/${tujuan}/${id}`;
  }


  if ((method == "PUT" || method == "POST") && (tujuan == "sm_master_data/jenis_event" || tujuan == "sm_master_data/jenis_service" || tujuan == "sm_master_data/jenis_wisata" || tujuan == "sm_master_data/jenis_galery" || tujuan == "sm_master_data/jenis_berita" || tujuan == "pangkat" || tujuan == "sm_portal/news" || tujuan == "sm_portal/public_service" || tujuan == "sm_portal/event" || tujuan == "sm_portal/wisata" || tujuan == "sm_portal/gallery" || tujuan == "opsdal/emergency_masyarakat" || tujuan == "sm_master_data/fasilitas" || tujuan == "it_asset_management/it_asset_management" || tujuan == "sm_hrm/profile_image" || tujuan == "public_service" || tujuan == "sm_hrm/riwayat_sertifikasi" || tujuan == "sm_hrm/user_master" || tujuan == "sm_hrm/riwayat_pelatihan")) {
    content = 'multipart/form-data';
  } else {
    content = 'application/json';
  }

  // let header = {
  //   token: '5b3dac76aaee24d14185cbc3d010fd20',
  //   'Content-Type': content,
  // Authorization: `Bearer ${localStorage.getItem('bearer')}`
  // }

  // if (localStorage.getItem('bearer')) {
  //   header = { ...header, Authorization: `Bearer ${localStorage.getItem('bearer')}` }
  // }

  let rsp = {
    method: method,
    url: mainurl,
    headers: {
      token: '5b3dac76aaee24d14185cbc3d010fd20',
      'Content-Type': content
    },
  }

  if ((method == "PUT" || method == "POST") && (tujuan == 'pangkat' || tujuan == "sm_master_data/jenis_galery" || tujuan == "sm_master_data/jenis_service" || tujuan == "sm_master_data/jenis_wisata" || tujuan == "sm_master_data/jenis_berita" || tujuan == "sm_master_data/jenis_event" || tujuan == "sm_portal/event" || tujuan == "sm_portal/news" || tujuan == "sm_portal/public_service" || tujuan == "sm_portal/wisata" || tujuan == "sm_portal/gallery" || tujuan == "opsdal/emergency_masyarakat" || tujuan == "sm_master_data/fasilitas" || tujuan == "it_asset_management/it_asset_management" || tujuan == "public_service" || tujuan == "sm_hrm/riwayat_sertifikasi" || tujuan == "sm_hrm/user_master" || tujuan == "sm_hrm/riwayat_pelatihan" || tujuan == "sm_hrm/profile_image")) {
    rsp['data'] = data;
  } else {
    if (data?.length > 0) {
      data = JSON.parse(data)
      data.ctdby = localStorage.getItem('kode_user_master');
      rsp['data'] = JSON.stringify(data);
    } else {
      data = {
        kode_user_master: localStorage.getItem('kode_user_master')
      }
      rsp['data'] = JSON.stringify(data);
    }
  }
  return rsp;
}


data.config_auth = (method, tujuan, data, id) => {
  var mainurl = '';
  var content = '';
  if (!id) {
    mainurl = `${url}/api/v.0.1/${tujuan}`;
  } else {
    mainurl = `${url}/api/v.0.1/${tujuan}/${id}`;
  }
  if ((method == "PUT" || method == "POST") && (tujuan == "pangkat")) {
    content = 'multipart/form-data';
  } else {
    content = 'application/json';
  }

  let header = {
    token: '5b3dac76aaee24d14185cbc3d010fd20',
    'Content-Type': content,
  }


  let rsp = {
    method: method,
    url: mainurl,
    headers: header,
  };

  if (data) {
    rsp['data'] = data;
  }

  return rsp;
}

module.exports = data;
