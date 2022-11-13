import axios from "axios";
import setingApi from './SettingApi'
import Swal from 'sweetalert2'
import { message } from 'antd'


const StorageApi = function (data) {

}


/*
  ============
  = GET API  =
  ============
 */
StorageApi.getData = async (tujuan, alert = true) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('GET', tujuan))
      .then(function (rsp) {
        resolve(rsp);
      }).catch(function (error) {
        if (error.message == "Network Error") {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: 'Server Dalam keadaan Mati',
              icon: 'error'
            })
          }
        } else if (error.response.status == 404) {
          if (alert) {
            Swal.fire({
              title: 'Info!',
              text: 'Data tidak ditemukan',
              icon: 'info'
            })
          }
        }
        reject(error);
      })
  })
}

/*
  ===================
  = GET DETAIL API  =
  ===================
*/
StorageApi.detailData = async (tujuan, id) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('GET', tujuan, '', id))
      .then(function (rsp) {
        resolve(rsp);
      }).catch(function (error) {
        reject(error);
      })
  })
}

/*
  =============
  = POST API  =
  =============
*/
StorageApi.addData = (tujuan, data, alert = true) => {
  var Apidata = '';
  if (tujuan == "pangkat" || tujuan == "public_service" || tujuan == "sm_hrm/riwayat_sertifikasi" || tujuan == "sm_hrm/riwayat_pelatihan" || tujuan == "sm_hrm/user_master" || tujuan == "sm_hrm/profile_image") {
    Apidata = data
  } else {
    data = { ...data, kode_app: setingApi.kode_app }
    Apidata = JSON.stringify(data)
  }
  return new Promise((resolve, reject) => {
    axios(setingApi.config('POST', tujuan, Apidata, ''))
      .then(function (rsp) {
        if (alert) {
          Swal.fire({
            title: 'Success!',
            text: rsp.data.msg,
            icon: 'success'
          })
        }
        resolve(rsp);
      }).catch(function (error) {
        var message = '';
        if (!error.response.data.status) {
          message = error.response.data.msg
        } else {
          message = error.message
        }

        if (typeof message == "object") {
          if (alert) {
            Swal.fire({
              title: 'Perhatian!',
              text: "System tidak dapat memproses",
              icon: 'warning'
            })
          }
        } else {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: message,
              icon: 'error'
            })
          }
        }
        // debugger
        reject(error);
      })
  });
}

StorageApi.auth = (tujuan, data, alert = true) => {
  var Apidata = '';
  data = { ...data, kode_app: setingApi.kode_app }
  if (tujuan == "users" || tujuan == "master_data" || tujuan == "tiket_eos" || tujuan == "tiket_prob" || tujuan == "tiket_preventive" || tujuan == "tiket_preventif_listrik") {
    Apidata = data
  } else {
    Apidata = JSON.stringify(data)
  }
  return new Promise((resolve, reject) => {
    axios(setingApi.config_auth('POST', tujuan, Apidata, ''))
      .then(function (rsp) {
        if (alert) {
          Swal.fire({
            title: 'Success!',
            text: rsp.data.msg,
            icon: 'success'
          })
        }
        resolve(rsp);
      }).catch(function (error) {
        var message = '';
        if (!error.response.data.status) {
          message = error.response.data.msg
        } else {
          message = error.message
        }
        if (typeof message == "object") {
          if (alert) {
            Swal.fire({
              title: 'Perhatian!',
              text: "System tidak dapat memproses",
              icon: 'warning'
            })
          }
        } else {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: message,
              icon: 'error'
            })
          }
        }
        // debugger
        reject(error);
      })
  });
}

/*
  ============
  = PUT API  =
  ============
*/
StorageApi.editData = async (tujuan, data, id, alert = true) => {
  return new Promise((resolve, reject) => {
    var Apidata = '';
    if (tujuan == "pangkat" || tujuan == "public_service" || tujuan == "sm_hrm/riwayat_sertifikasi" || tujuan == "sm_hrm/riwayat_pelatihan" || tujuan == "sm_hrm/user_master" || tujuan == "sm_hrm/profile_image") {
      Apidata = data
    } else {
      Apidata = JSON.stringify(data)
    }
    axios(setingApi.config('PUT', tujuan, Apidata, id))
      .then(function (rsp) {
        if (alert) {
          Swal.fire({
            title: 'Success!',
            text: rsp.data.msg,
            icon: 'success'
          })
        }
        resolve(rsp);
      }).catch(function (error) {
        var message = '';
        if (!error.response.data.status) {
          message = error.response.data.msg
        } else {
          message = error.message
        }

        if (typeof message == "object") {
          if (alert) {
            Swal.fire({
              title: 'Perhatian!',
              text: "System tidak dapat memproses",
              icon: 'warning'
            })
          }
        } else {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: message,
              icon: 'error'
            })
          }
        }
        reject(error);
      })
  });
}

/*
  ===============
  = DELETE API  =
  ===============
*/
StorageApi.hapusData = async (tujuan, id, data = [], alert = true) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('DELETE', tujuan, data, id))
      .then(function (rsp) {
        if (alert) {
          Swal.fire({
            title: 'Success!',
            text: rsp.data.msg,
            icon: 'success'
          }).then(x => {
            resolve(rsp);
          })
        }
      }).catch(function (error) {
        var message = '';
        if (!error.response.data.status) {
          message = error.response.data.msg
        } else {
          message = error.message
        }

        if (typeof message == "object") {
          if (alert) {
            Swal.fire({
              title: 'Perhatian!',
              text: "System tidak dapat memproses",
              icon: 'warning'
            })
          }
        } else {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: message,
              icon: 'error'
            })
          }
        }
        reject(error);
      })
    // Swal.fire({
    //   title: 'Delete',
    //   text: 'Apakah kamu ingin menghapus data ini ?',
    //   showDenyButton: true,
    //   confirmButtonText: 'Ya',
    //   denyButtonText: `Tidak`,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //   } else if (result.isDenied) {
    //     if (alert) {
    //       Swal.fire('Tidak jadi menghapus', '', 'info')
    //     }
    //   }
    // })
  })
}

StorageApi.hapusDataNew = async (tujuan, id, alert = true) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('DELETE', tujuan, [], id))
      .then(function (rsp) {
        if (alert) {
          Swal.fire({
            title: 'Success!',
            text: rsp.data.msg,
            icon: 'success'
          })
        } else {
          resolve(rsp);
        }

      }).catch(function (error) {
        var message = '';
        if (!error.response.data.status) {
          message = error.response.data.msg
        } else {
          message = error.message
        }

        if (typeof message == "object") {
          if (alert) {
            Swal.fire({
              title: 'Perhatian!',
              text: "System tidak dapat memproses",
              icon: 'warning'
            })
          }
        } else {
          if (alert) {
            Swal.fire({
              title: 'Error!',
              text: message,
              icon: 'error'
            })
          }
        }
        reject(error);
      })
  })
}

/*
  ===============
  = Relasi API  =
  ===============
*/
StorageApi.getRelasi = async (tujuan) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('GET', tujuan))
      .then(function (rsp) {
        resolve(rsp)
      }).catch(function (e) {
        reject(e)
      })
  })
}

/*
  ===================
  = Sub Relasi API  =
  ===================
*/
StorageApi.getSubRelasi = async (tujuan, id) => {
  return new Promise((resolve, reject) => {
    axios(setingApi.config('GET', tujuan))
      .then(function (rsp) {
        resolve(rsp);
      }).catch(function (error) {
        Swal.fire({
          title: 'Error!',
          text: error.response.data.msg,
          icon: 'error'
        })
        reject(error)
      })
  })
}

StorageApi.Notifikasi = async (type, pesan, param) => {

  type == "loading" ? message.loading(pesan, param)
    : type == "success" ? message.success(pesan, param)
      : type == "info" ? message.info(pesan, param)
        : type == "warning" ? message.warning(pesan, param)
          : type == "error" ? message.error(pesan, param)
            : ""

}

StorageApi.Akumulasi = async (tujuan) => {
  var hasil = []
  Promise.resolve(StorageApi.getData(tujuan))
    .then(value => {
      const data = value.data.data;
      hasil = data
    }).catch(error => {
      console.log(error);
    })
  return hasil;
}

export default StorageApi