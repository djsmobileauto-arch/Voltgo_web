import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/voltgo-logo-final.png"
          alt="VoltGo Logo"
          width={220}   // puedes subir a 240 si quieres más grande
          height={70}
          priority
        />
      </div>

      {/* Aquí puedes mantener tu nav o lo que tengas */}
    </header>
  );
}
