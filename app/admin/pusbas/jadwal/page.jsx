// components/ScheduleTable.tsx
'use client';

import JadwalForm from '@/app/_component/admin/jadwalForm';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

const schedules = [
  { day: 'Senin', date: '01 Januari 2025', start: '13.00', end: '16.00', agenda: 'Pelatihan' },
  { day: 'Selasa', date: '02 Januari 2025', start: '13.00', end: '16.00', agenda: 'Pelatihan' },
  { day: 'Rabu', date: '03 Januari 2025', start: '13.00', end: '16.00', agenda: 'Ujian' },
];

export default function AdminJadwal() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-52 pr-6 pt-20">
      <h1 className="text-2xl font-semibold mb-4">Jadwal</h1>

      <button className="bg-green text-white text-xl font-radjdhani_bold border rounded px-3 py-1 mb-4 flex items-center gap-2" onClick={() => setIsOpen(true)}>
        Buat Jadwal <Plus size={16} />
      </button>

      <div className="mb-2 flex items-center gap-2 w-11/12 mx-auto">
        <h1 className="font-radjdhani_bold text-xl">
          Kelas A (Weekday Online)
        </h1>
        <div className='flex gap-2'>
          <div className='p-1 bg-red-500 rounded-md text-white hover:bg-red-400'>
            <Trash2 size={20} className="cursor-pointer" />
          </div>
          <div className='p-1 bg-[#00e673] hover:bg-[#00ff80] rounded-md text-white' >
            <Pencil size={20} className="cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden w-11/12 mx-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hari
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jam Mulai
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jam Selesai
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agenda
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedules.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.day}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.start}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.end}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.agenda}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="inline-flex text-white bg-[#00e673] hover:bg-[#00ff80] items-center mr-3 bg-green-400 px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded hover:bg-green-300">
                    <Pencil size={14} className="mr-1" /> Edit
                  </button>
                  <button className="inline-flex items-center bg-red-500 px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-white hover:bg-red-400">
                    <Trash2 size={14} className="mr-1" /> Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <JadwalForm isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
}
