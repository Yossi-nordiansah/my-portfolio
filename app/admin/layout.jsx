import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
        <div className='absolute z-20 w-full flex bg-secondary py-2 px-5 justify-between items-center'> 
            <div className='flex items-center text-white gap-4'>
                <img src="/images/iconeps_logo.png" alt="" className='w-11'/>
                <h1 className='text-3xl font-robotoBold'>Halaman Admin</h1>
            </div>
            <h1 className='text-3xl font-robotoBold text-white'>PUSKOM</h1>
        </div>
        <div className='absolute bg-primary h-full w-40 px-3 pt-20 z-10'>
            <p>nama admin</p>
            <ul>
                <li>Pelatihan</li>
                <li>Informasi Periode</li>
                <li>Jadwal</li>
            </ul>
            <p>Logout</p>
        </div>
        {children}
    </div>
  )
}

export default AdminLayout