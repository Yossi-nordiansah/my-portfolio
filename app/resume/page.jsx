export default function Home() {
  return (
    <div className="pt-20 pb-10 min-h-screen bg-gradient-to-b from-blue-950 to-blue-800">
      <h1 className="font-robotoBold text-3xl text-center text-blue-400">My Resume</h1>
         <iframe
        src="/pdf/resume.pdf"
        width="70%"
        className="mx-auto h-[90vh] pt-4"
      />
    </div>
  );
}
