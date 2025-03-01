export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">ICONEPS</h2>
          <p className="mt-2 text-sm">
            Lembaga Pelatihan Bahasa Inggris & Komputer untuk meningkatkan kualitas sumber daya manusia.
          </p>
        </div>

        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/profil" className="hover:text-gray-400">Profil</a></li>
              <li><a href="/pelatihan" className="hover:text-gray-400">Pelatihan</a></li>
              <li><a href="/pendaftaran" className="hover:text-gray-400">Pendaftaran</a></li>
              <li><a href="/kontak" className="hover:text-gray-400">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <p className="text-sm">Gedung Hajar Ibrahim Lantai 2</p>
            <p className="text-sm">Email: info@iconeps.com</p>
            <p className="text-sm">Telepon: (0274) 123456</p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} ICONEPS. All rights reserved.
      </div>
      <p className="text-[12px] text-center mt-2">Developed By <a href="https://www.instagram.com/yossi_nordiansah" className="font-semibold">Yossi Nordiansah</a></p>
    </footer>
  );
}
