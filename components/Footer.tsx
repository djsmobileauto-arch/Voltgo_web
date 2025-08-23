export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Voltgo — Todos los derechos reservados
        </p>

        <nav className="flex items-center gap-5 text-sm">
          <a href="#services" className="hover:text-blue-600">Servicios</a>
          <a href="#how" className="hover:text-blue-600">Cómo funciona</a>
          <a href="#contact" className="hover:text-blue-600">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600"
            aria-label="Instagram"
          >
            IG
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
            aria-label="Facebook"
          >
            FB
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-800"
            aria-label="X"
          >
            X
          </a>
          <a
            href="mailto:soporte@voltgo.com"
            className="hover:text-green-600"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
