import React, { useState, useEffect } from 'react'
import StorageApi from '../APIConfig/MainApi';
import SelectSearch from 'react-select';

export function SelectSaluranInformasi(props) {
  const [list, setDetail] = useState([]);

  useEffect(e => {
    ListCategory();
  }, [])

  const ListCategory = async () => {
    const a = Promise.resolve(StorageApi.getRelasi('sm_master_data/saluran_informasi'));
    a.then(value => {
      const lists = value.data.data;
      var daftar = [];
      lists.map(item => (
        item.saluran == "Portal Interaktif" ? (
          daftar.push({ label: item.saluran, value: item.rowid })
        ) : ("")
      ))
      setDetail(daftar)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <SelectSearch
        className="w-full"
        value={props.value ?
          list.filter(option =>
            option.value === props.value) : ""
        }
        onChange={props.onChange}
        placeholder={props.placeholder}
        options={list}
        required
        isDisabled={props.disabled ? true : false}
      />
    </>
  )
}

export function SelectKategori(props) {
  const [list, setDetail] = useState([]);

  useEffect(e => {
    ListCategory();
  }, [])

  const ListCategory = async () => {
    const a = Promise.resolve(StorageApi.getRelasi('sm_master_data/kategori'));
    a.then(value => {
      const lists = value.data.data;
      var daftar = [];
      lists.map(item => (
        item.kategori == "Laporan" ? (
          daftar.push({ label: item.kategori, value: item.rowid })
        ) : ("")
      ))
      setDetail(daftar)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <SelectSearch
        className="w-full !text-black"
        value={props.value ?
          list.filter(option =>
            option.value === props.value) : ""
        }
        onChange={props.onChange}
        placeholder={props.placeholder}
        options={list}
        required
        isDisabled={props.disabled ? true : false}
      />
    </>
  )
}

export function SelectSubKategori(props) {
  const [list, setDetail] = useState([]);

  useEffect(e => {
    ListCategory(props.param);
  }, [props.param])

  const ListCategory = async (param) => {
    const a = Promise.resolve(StorageApi.getRelasi('sm_master_data/sub_kategori?kategori_id=' + param));
    a.then(value => {
      const lists = value.data.data;
      var daftar = [];
      lists.map(item => (
        daftar.push({ label: item.sub_kategori, value: item.rowid })
      ))
      setDetail(daftar)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <SelectSearch
        className="w-full !text-black"
        value={props.value ?
          list.filter(option =>
            option.value === props.value) : ""
        }
        onChange={props.onChange}
        placeholder={props.placeholder}
        options={list}
        required
        isDisabled={props.disabled ? true : false}
      />
    </>
  )
}

export function SelectSituasiLalin(props) {
  const [list, setDetail] = useState([]);

  useEffect(e => {
    ListCategory();
  }, [])

  const ListCategory = async () => {
    const a = Promise.resolve(StorageApi.getRelasi('sm_master_data/situasi_lalin'));
    a.then(value => {
      const lists = value.data.data;
      var daftar = [];
      lists.map(item => (
        daftar.push({ label: item.situasi_lalin, value: item.rowid })
      ))
      setDetail(daftar)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <SelectSearch
        className="w-full"
        value={props.value ?
          list.filter(option =>
            option.value === props.value) : ""
        }
        onChange={props.onChange}
        placeholder={props.placeholder}
        options={list}
        required
        isDisabled={props.disabled ? true : false}
      />
    </>
  )
}

export function SelectKategoriPelapor(props) {
  const [list, setDetail] = useState([]);

  useEffect(e => {
    ListCategory();
  }, [])

  const ListCategory = async () => {
    const a = Promise.resolve(StorageApi.getRelasi('sm_master_data/kategori_pelapor'));
    a.then(value => {
      const lists = value.data.data;
      var daftar = [];
      lists.map(item => (
        daftar.push({ label: item.kategori_pelapor, value: item.rowid })
      ))
      setDetail(daftar)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <SelectSearch
        className="w-full"
        value={props.value ?
          list.filter(option =>
            option.value === props.value) : ""
        }
        onChange={props.onChange}
        placeholder={props.placeholder}
        options={list}
        required
        isDisabled={props.disabled ? true : false}
      />
    </>
  )
}

export function InputCustom(props) {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={`form-control block
        ${props.width ? props.width : "w-1"} px-3 py-1.5
        ${props.width ? 'mr-4' : ""}
        font-normal
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded transition
        ease-in-out m-0
        ${props.className}
        ${props.readOnly || props.required ? "bg-[#F5F5F5] focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-red-500"
            : "bg-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}
        `}
        placeholder={props.placeholder} value={props.value} onChange={props.onChange} onKeyUp={props.onKeyUp}
        readOnly={props.readOnly ? true : false}

      />
    </>
  )
}

export function Textarea(props) {
  return (
    <>
      <textarea className={`
          form-control block 
          ${props.width ? props.width : "w-full"}
          ${props.width ? 'mr-4' : ""}
          px-3 py-1.5 text-base font-normal
          rounded transition ease-in-out m-0
          text-gray-700
          bg-white bg-clip-padding
          border-gray-300 border border-solid 
          focus:text-gray-700 focus:bg-white 
          focus:border-blue-600 focus:outline-none`}

        id={props.id}
        rows={props.rows}
        cols={props.cols}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        readOnly={props.readOnly ? true : false}
      ></textarea>
    </>
  )
}