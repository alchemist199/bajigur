import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      <div className="max-w-xl w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/profile.jpg"
            alt="Kris Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-white"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Muhamad Kris</h1>
        <p className="text-lg text-gray-300 mb-4">Pekerjaan: maling jambu monyet</p>
        <blockquote className="italic text-yellow-300 mb-6">
          "Ingat kata-kata Pascol: kau akan dihargai jika kau mythic immortal bujank inam, alakon."
        </blockquote>

        <h2 className="text-2xl font-semibold mb-3">Sosial Media</h2>
        <ul className="space-y-2">
          <li><Link href="https://github.com/alchemist199" className="text-blue-400 hover:underline">GitHub</Link></li>
          <li><Link href="https://instagram.com/helimburg_" className="text-pink-400 hover:underline">Instagram</Link></li>
          <li><Link href="https://twitter.com/krisxyzzz" className="text-blue-300 hover:underline">Twitter</Link></li>
          <li><span className="text-gray-400">Discord: pumpkidss</span></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Project</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-green-300 mb-1">REKAP AIRDROP 2025 BY GANTENG KRONIS</h3>
          <p className="text-gray-300 mb-2">Sebuah rekapan calon pundi pundi keikhlasan dari ganteng kronis,
            klik dibawah adik adik.</p>
          <Link href="https://linen-brie-a57.notion.site/REKAP-AIRDROP-2025-BY-GANTENG-KRONIS-1da9bb97c6a48049bd9ccb0eeb49c0fc" className="text-indigo-400 hover:underline">Lihat di Notion</Link>
        </div>
      </div>
    </main>
  );
}
