"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css'; // Import theme CSS

const EmailEditor = ({isOpen, close}) => {

    const [value, setValue] = useState('');

    if(!isOpen){
        return;
    }

    return (
        <div className='inset-0 bg-black/50 absolute h-screen flex justify-center items-center z-[100]'>
            <div className='bg-white px-3 py-2 w-[60%] rounded-lg'>
                <h1 className='font-radjdhani_bold text-2xl text-center my-3'>Kirim Email Ke Seluruh Mahasiswa</h1>
                <input type="text" placeholder='Subject...' className='border border-black px-3 py-2 w-full rounded-md'/>
                <ReactQuill
                    value={value}
                    onChange={setValue}
                    className="h-64 border mt-2"
                />
                <div className='flex justify-end gap-3 mt-14'>
                    <button onClick={close} className='bg-red-500 hover:bg-red-400 px-2 py-1 text-white font-radjdhani_bold rounded-md text-lg'>Cancel</button>
                    <button className='bg-blue-600 hover:bg-blue-500 px-2 py-1 text-white font-radjdhani_bold rounded-md text-lg'>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default EmailEditor;