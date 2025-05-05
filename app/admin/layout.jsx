"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminLayout = ({ children }) => {

    const pathName = usePathname();

    return (
        <div>
            <div className='absolute z-20 w-full flex bg-secondary py-2 px-5 justify-between items-center'>
                <div className='flex items-center text-white gap-4'>
                    <img src="/images/iconeps_logo.png" alt="" className='w-11' />
                    <h1 className='text-3xl font-robotoBold'>Halaman Admin</h1>
                </div>
                <h1 className='text-3xl font-robotoBold text-white'>PUSKOM</h1>
            </div>
            <div className='absolute bg-primary h-full w-48 pt-24 z-10 text-white font-semibold'>
                <p className='text-xl mb-10 px-3'>nama admin</p>
                <ul className='flex-col'>
                    <Link href="/admin/pelatihan" className={`py-4 border-y block px-3 ${pathName === "/admin/pelatihan" ? "bg-yellow-400" : ""}`}>
                        <li className='flex justify-between'>
                            <p>Pelatihan</p>
                            <img src="/icons/triangle.svg" alt="" className='w-5 rotate-90' />
                        </li>
                    </Link>
                    <Link href="/admin/informasi-periode" className={`py-4 border-b block px-3 ${pathName === "/admin/informasi-periode" ? "bg-yellow-400" : ""}`}>
                        <li className='flex justify-between'>
                            <p>Informasi Periode</p>
                            <img src="/icons/triangle.svg" alt="" className='w-5 rotate-90' />
                        </li>
                    </Link>
                    <Link href="/admin/jadwal" className={`py-4 border-b block px-3 ${pathName === "/admin/jadwal" ? "bg-yellow-400" : ""}`}>
                        <li className='flex justify-between'>
                            <p>Jadwal</p>
                            <img src="/icons/triangle.svg" alt="" className='w-5 rotate-90' />
                        </li>
                    </Link>
                </ul>
                <div className='flex items-center gap-4 px-3 py-4 border-b cursor-pointer'>
                    <img src="/icons/logout-1.svg" alt="" className='w-5' />
                    <p className='text-lg'>Logout</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default AdminLayout