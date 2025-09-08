<header className="bg-blue-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
    {/* Logo */}
    <div className="flex-shrink-0">
      <Image
        src="/logo-voltgo.png"
        alt="VoltGo Logo"
        width={160}
        height={60}
        priority
      />
    </div>

    {/* Menú de navegación */}
    <nav className="hidden md:flex space-x-8">
      <a href="/" className="text-white hover:text-yellow-300 font-medium">Home</a>
      <a href="/services" className="text-white hover:text-yellow-300 font-medium">Services</a>
      <a href="/roadside" className="text-white hover:text-yellow-300 font-medium">Roadside</a>
      <a href="/app" className="text-white hover:text-yellow-300 font-medium">App</a>
      <a href="/subscribe" className="text-white hover:text-yellow-300 font-medium">Subscribe</a>
      <a href="/contact" className="text-white hover:text-yellow-300 font-medium">Contact</a>
      <a href="/pricing" className="text-white hover:text-yellow-300 font-medium">Pricing</a>
    </nav>

    {/* Teléfono Emergencias */}
    <div className="hidden md:block">
      <a
        href="tel:183348VOLTGO"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold"
      >
        Emergency 24/7 · Call 1-833-4-VOLTGO
      </a>
    </div>
  </div>
</header>
