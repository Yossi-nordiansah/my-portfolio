// components/ScheduleTable.tsx
'use client';

import JadwalForm from '@/app/_component/admin/jadwalForm';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

export default function AdminCetakLaporan() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pl-52 pr-6 pt-20">
            <h1 className="text-2xl font-semibold mb-4">Cetak Laporan</h1>
            <div className='flex items-center gap-3'>
                <label htmlFor="">Tahun : </label>
                <div className="px-2 py-1 border rounded cursor-pointer w-fit">
                    <select className="bg-transparent outline-none">
                        <option value="">2024</option>
                        <option value="">2021</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                    </select>
                </div>
                <button className='px-2 py-1 bg-blue-700 text-white font-radjdhani_bold rounded'>Buat Laporan</button>
            </div>
            <div className='h-96 flex items-center justify-center text-xl font-robotoBold'>
                Tidak Ada Laporan 
            </div>
        </div>
    );
}
