import React, { useState } from 'react';

const Jadwal = () => {

  const [jadwal, setJadwal] = useState([
    {
      id: 1,
      
    }
  ]);

  return (
    <div className='h-screen pt-20 px-6'>
      <div className=''>
        <div className='flex gap-4 mb-7 items-center'>
          <img src="/images/calendar.png" alt="" className='w-10' />
          <h1 className='text-xl font-robotoBold'>Periode Januari 2025</h1>
        </div>
        <div>
          <img src="/images/jadwal.png" alt="" className='w-96' />
          <table>
            <tr></tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Jadwal