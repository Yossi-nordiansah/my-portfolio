"use client"
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Registrasi = () => {
    const router = useRouter()
    const [showPasswordButton, setShowPasswordButton] = useState(false);
    const [showConfirmPasswordButton, setShowConfirmPasswordButton] = useState(false);
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [prodi, setProdi] = useState(''); 
    const [semester, setSemester] = useState('');
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOnSubmitRegister = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:5000/users/register', {
                nama,
                email,
                nomorTelepon,
                prodi,
                semester,
                nim,
                password,
                confPassword,
            });
            console.log(response.data)
            alert(response.data.message);
            navigate('/login')
        } catch (error) {
            if (error.response) {
                console.log(error.response)
                alert(error.response.data.message);
            } else {
                alert("Terjadi kesalahan: " + error.message);
            }
        } finally {
            setIsSubmitting(false);
        }

    }

    return (
        <div className='min-h-screen p-5 bg-gradient-to-br from-white to-blue-400 shadow-2xl flex flex-wrap justify-center lg:gap-32 gap-10 items-center'>
            <img src="/images/registrasi.png" alt="" className='w-96 lg:w-[450px]' />
            <form onSubmit={handleOnSubmitRegister} className='sm:min-w-64 min-w-full h-fit max-w-[450px] rounded-lg border-4 border-blue-700 text-gray-950 backdrop-blur bg-white/20 py-4 px-4'>
                <h1 className='font-semibold text-center mb-2 text-xl'>Registrasi</h1>
                <div className='mb-3 flex sm:flex-row flex-col justify-center gap-2'>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="nama" className='mb-1 block font-semibold'>Nama Lengkap</label>
                        <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" id='nama' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="email" className='mb-1 block font-semibold'>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                </div>
                <div className='mb-3 flex sm:flex-row flex-col justify-center gap-2'>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="telepon" className='mb-1 block font-semibold'>Nomor Telepon / WA</label>
                        <input value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} type="tel" id='telepon' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="prodi" className='mb-1 block font-semibold'>Fakultas / Prodi</label>
                        <input value={prodi} onChange={(e) => setProdi(e.target.value)} type="text" id='prodi' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                </div>
                <div className='mb-3 sm:flex-row flex-col flex justify-center gap-2'>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="semester" className='mb-1 block font-semibold'>Semester</label>
                        <input value={semester} onChange={(e) => setSemester(e.target.value)} type="text" id='semester' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                    <div className='w-full sm:w-fit'>
                        <label htmlFor="nim" className='mb-1 block font-semibold'>NIM</label>
                        <input value={nim} onChange={(e) => setNim(e.target.value)} type="text" id='nim' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
                    </div>
                </div>
                <div className='w-full'>
                    <label className='mb-1 block font-semibold' htmlFor="password">Password</label>
                    <div className='flex justify-between rounded-md border border-blue-300 overflow-hidden bg-white shadow-2xl'>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={`${showPasswordButton ? 'text' : 'password'}`} id='password' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black' />
                        <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowPasswordButton(!showPasswordButton)}>
                            <img className='block' src={`${showPasswordButton ? "/icons/showPassword.svg" : "/icons/hidePassword.svg"}`} alt="show password" />
                        </div>
                    </div>
                </div>
                <div className='w-full mb-4'>
                    <label className='mb-1 block font-semibold' htmlFor="confpassword">Confirm Password</label>
                    <div className='flex justify-between rounded-md border border-blue-300 overflow-hidden bg-white shadow-2xl'>
                        <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type={`${showConfirmPasswordButton ? 'text' : 'password'}`} id='confpassword' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black' />
                        <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowConfirmPasswordButton(!showConfirmPasswordButton)}>
                            <img className='block' src={`${showConfirmPasswordButton ? "/icons/showPassword.svg" : "/icons/hidePassword.svg"}`} alt="show password" />
                        </div>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-blue-600 to-blue-900 w-full  py-2 rounded font-semibold text-white' type='submit' disabled={isSubmitting}>{isSubmitting ? 'Mengirim...' : 'Registrasi'}</button>
            </form>
        </div>
    )
}

export default Registrasi


