import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const KelasForm = ({ isOpen, close }) => {

    if (!isOpen) {
        return;
    }

    return (
        <div className='inset-0 flex justify-center items-center bg-black/50 absolute z-50 h-screen'>
            <form className='p-4 bg-white rounded-xl w-80 space-y-3'>
                <h1 className='text-2xl font-robotoBold text-center mb-2'>Buat Kelas</h1>
                <div className='flex flex-col'>
                    <label>Nama Kelas</label>
                    <input type="text" className='border border-black py-1 px-2 rounded-md w-full' />
                </div>
                <div className='flex flex-col'>
                    <label>Instruktur</label>
                    <div className='border border-black px-2 py-1 rounded-md w-full'>
                        <select className='outline-none w-full'>
                            <option value="">Instruktur A</option>
                            <option value="">Instruktur B</option>
                            <option value="">Instruktur C</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label>Tipe Kelas</label>
                    <div className='border border-black px-2 py-1 rounded-md w-full'>
                        <select className='outline-none w-full'>
                            <option value="">Weekend (Offline)</option>
                            <option value="">Weekday (Online)</option>
                            <option value="">Weekday (Offline)</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-end gap-6'>
                    <button
                        type="button"
                        onClick={close}
                        className='py-1 px-2 bg-red-600 text-white font-radjdhani_bold rounded-md'
                    >
                        Cancel
                    </button>
                    <button className='py-1 px-2 bg-blue-600 text-white font-radjdhani_bold rounded-md'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default KelasForm;
