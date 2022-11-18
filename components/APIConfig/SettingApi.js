// const url = "http://localhost:8082";
// const url = "https://backoffice.web.id:8082";
// const url = "https://dev.estrada.co.id:8082";
// const url = "http://192.168.8.36:8082";
// const url = "http://smbali.estrada.co.id:8082";
const url = "https://backend.elingbali.com:8082";

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

  content = 'application/json';

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


  data = {
    kode_user_master: localStorage.getItem('kode_user_master')
  }
  rsp['data'] = JSON.stringify(data);
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
