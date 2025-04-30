import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-footer text-white py-8 text-center flex justify-center"
      style={{ padding: '2vh 5vw' }}
      id="contato"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-4 space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; 2025 SeuNome ou NomeDoSite. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
