"use client"
import React, { useState } from 'react';
import "../globals.css";

const Jadwal = () => {
  const [jadwalKelasA, setJadwalKelasA] = useState([
    {
      hari: "Senin",
      tanggal: "01 Januari 2025",
      jamMulai: "13.00",
      jamSelesai: "16.00",
    },
    {
      hari: "Selasa",
      tanggal: "02 Januari 2025",
      jamMulai: "13.00",
      jamSelesai: "16.00",
    },
    {
      hari: "Rabu",
      tanggal: "03 Januari 2025",
      jamMulai: "13.00",
      jamSelesai: "16.00",
    },
  ]);

  return (
    <div className='min-h-screen py-20 px-6'>
      <div>
        <div className='flex gap-4 mb-7 items-center'>
          <img src="/images/calendar.png" alt="" className='w-10' />
          <h1 className='sm:text-xl text-lg font-robotoBold'>Periode Januari - Februari 2025</h1>
        </div>

        <div className='flex lg:px-14 md:px-3 px-2 md:justify-between justify-center gap-4'>
          <img src="/images/jadwal2.png" alt="" className='max-w-96 h-auto min-w-56 w-full object-contain md:block hidden' />
          <div>
            <h1 className='font-semibold text-center mb-2'>Kelas A (Weekend Online)</h1>

            {/* table */}
            <table className='table h-fit w-fit text-center lg:text-nowrap'>
              <thead>
                <tr className='bg-blue-600 text-white'>
                  <th className='text-center sm:text-base text-sm'>Hari</th>
                  <th className='text-center sm:text-base text-sm'>Tanggal</th>
                  <th className='text-center sm:text-base text-sm sm:px-7'>Jam Mulai</th>
                  <th className='text-center sm:text-base text-sm sm:px-7'>Jam Selesai</th>
                </tr>
              </thead>
              <tbody>
                {jadwalKelasA.map((item, index) => (
                  <tr key={index}>
                    <td className='text-center sm:text-base text-sm'>{item.hari}</td>
                    <td className='text-center sm:text-base text-sm'>{item.tanggal}</td>
                    <td className='text-center sm:text-base text-sm'>{item.jamMulai}</td>
                    <td className='text-center sm:text-base text-sm'>{item.jamSelesai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
