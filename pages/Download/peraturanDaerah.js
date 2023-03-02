import React from 'react'
import { BaseLayouts } from '../../components/MainCode/MainImport'

export default function PeraturanDaerah() {
  return (
    <>
      <BaseLayouts>
        <p className='py-2 px-2 text-2xl'>Peraturan Daerah</p>
        
        <iframe src="https://jdih.baliprov.go.id/produk-hukum/peraturan-perundang-undangan/perda" width="90%" height="400" name="iframe" />
      </BaseLayouts>
    </>
  )
}