import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';


export function FilterJenisBerita(props) {
  return (
    <>
      <div className='row'>
        <div className='col-md-10'>
             {props.title ? (<>
            <div className="text-gray-200 font-bold">
                <label htmlFor="">{props.title}</label>
                {props.jenisBerita}
            </div>
            </>) : (<></>)}
        </div>
        <div className="col-md-2 mt-4 ">
            <div class="row">

            <div className='col-md-5'>
                {props.reset ? (<>
                    <Button variant='secondary' onClick={props.reset}>  &nbsp;Reset</Button>
                </>) : (<></>)}
            </div>
            <div className='col-md-5'>
                {props.filter ? (<>
                    <Button variant='primary' onClick={props.filter}>&nbsp;Filter</Button>
                </>) : (<></>)}
            </div>
            </div>
          
          
        </div>
      </div>
    </>
  )
}