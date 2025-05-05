"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css'; // Import theme CSS

const InformasiPeriode = () => {
  const [value, setValue] = useState('');

  return (
    <div className="pl-52 pr-6 pt-20">
        <h1 className='font-radjdhani_bold text-3xl'>Informasi Periode</h1>
      <ReactQuill
        value={value}
        onChange={setValue}
        className="h-80 border mt-4"
      />
      <button className='mt-16 bg-blue-600 px-2 py-1 rounded-md text-md font-robotoBold text-white'>Ubah Informasi</button>
    </div>
  );
};

export default InformasiPeriode;