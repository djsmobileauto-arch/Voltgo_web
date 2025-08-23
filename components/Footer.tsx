export default function Footer() {
  return (
    <footer className="border-t bg-gray-800 text-white py-6">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} VoltGo – Todos los derechos reservados
        </p>

        {/* Links de navegación */}
        <nav className="flex gap-6 text-sm">
          <a className="hover:text-blue-400" href="#services">
            Servicios
          </a>
          <a className="hover:text-blue-400" href="#how">
            Cómo funciona
          </a>
          <a className="hover:text-blue-400" href="#contact">
            Contacto
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
