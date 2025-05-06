import React from 'react';
import { UserGroupIcon, PencilSquareIcon, PresentationChartBarIcon, AcademicCapIcon, CheckBadgeIcon, ArrowPathIcon, DocumentCheckIcon, UsersIcon } from '@heroicons/react/24/solid';

const PelatihanAdminPage = () => {
  const cards = [
    { title: 'Mahasiswa', value: 40, icon: <UserGroupIcon className="h-20 w-20" /> },
    { title: 'Pendaftar', value: 30, icon: <PencilSquareIcon className="h-20 w-20" /> },
    { title: 'Kelas', value: 3, icon: <PresentationChartBarIcon className="h-20 w-20" /> },
    { title: 'Peserta', value: 35, icon: <UsersIcon className="h-20 w-20" /> },
    { title: 'Nilai', value: 0, icon: <AcademicCapIcon className="h-20 w-20" /> },
    { title: 'Lulus', value: 0, icon: <CheckBadgeIcon className="h-20 w-20" /> },
    { title: 'Remidial', value: 0, icon: <ArrowPathIcon className="h-20 w-20" /> },
    { title: 'Sertifikat', value: 0, icon: <DocumentCheckIcon className="h-20 w-20" /> },
  ];
  return (
    <div className='pl-48 pt-16'>
      <div className='flex p-4 gap-10 items-center'>
        <h1 className='font-radjdhani_bold text-3xl'>Pelatihan</h1>
        <div className='border-2 border-black rounded-lg px-2 py-1 font-robotoBold'>
          <select name="" id="">
            <option value="">1 February - 2 Maret 2025</option>
            <option value="">1 Mei - 2 Juni 2025</option>
            <option value="">1 Agustus - 2 September 2025</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mt-8">
        {cards.map((card, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-300 rounded-md p-4 shadow-md hover:scale-110 duration-200">
            <div className="text-gray-800">
              {card.icon}
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="text-2xl font-radjdhani_bold">{card.title}</div>
              <div className="text-3xl font-radjdhani_bold">{card.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PelatihanAdminPage