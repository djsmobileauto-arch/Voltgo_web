import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600">
      {/* Logo más grande y con presencia */}
      <div className="flex items-center">
        <Image
          src="/logo-voltgo.png"
          alt="VoltGo Logo"
          width={200}   // puedes subirlo a 220 o 240 si quieres aún más grande
          height={60}
          priority
        />
      </div>
    </header>
  );
}
