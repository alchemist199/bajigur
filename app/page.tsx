import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-16">
      <section className="text-center">
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-300"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6">krisxyz</h1>
        <p className="text-lg mt-2">aku adalah siapa.</p>

        <div className="flex justify-center gap-4 mt-4 text-2xl text-gray-600">
          <a href="https://github.com/alchemist199" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:tesnetaddict@email.com">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <section className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">tentang saya</h2>
        <p>
          hai, aku pernah bermimpi jadi kangkung, kadang juga aku kalo lagi ngelamun, pernah kepikiran jadi asbak.
        </p>
      </section>

      <section className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Proyek</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <a href="#" className="text-lg font-medium">Kuli 1</a>
            <p className="text-sm text-gray-600">kuli daily.</p>
          </li>
          <li className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <a href="#" className="text-lg font-medium">Kuli 2</a>
            <p className="text-sm text-gray-600">Masih dengan kuli.</p>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} krisxyz. Dibuat dengan Next.js
      </footer>
    </main>
  );
}
