"use client"
import React from 'react'
import { useRef, useEffect } from 'react';

const FormPendaftaran = ({ isOpen, close }) => {

    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                close(); // Panggil close dari props
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-green px-3 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div
                ref={popupRef}
                className="bg-white sm:p-6 p-3 rounded-lg shadow-lg w-80 border-2 border-yellow-300"
            >
                <h2 className="text-2xl text-center font-robotoBold mb-4 text-blue-950">Form Pendaftaran</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Nama Lengkap
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Bukti Pembayaran
                        </label>
                        <input
                            type="file"
                            id="bukti_pembayaran"
                            className="w-full sm:px-4 px-2 py-2 border border-gray-300 rounded-lg"
                            accept=".jpg, .jpeg, .png"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pilihan_kelas" className="block text-sm font-medium text-gray-700">
                            Pilihan Kelas
                        </label>
                        <select
                            name="pilihan_kelas"
                            // value={form.prodi}
                            // onChange={handleChange}
                            className={`w-full py-3 rounded-lg outline-none border`}
                            required
                        >
                            <option value="">Weekday Offline</option>
                            <option value="">Weekday Online</option>
                            <option value="">Weekend Offline</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nominal_pembayaran" className="block text-sm font-medium text-gray-700">
                            Nominal Pembayaran
                        </label>
                        <input
                            type="number"
                            id="nominal_pembayaran"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={close}
                            type="button"
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPendaftaran