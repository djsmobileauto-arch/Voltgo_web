import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo-voltgo.png"
          alt="VoltGo Logo"
          width={160}
          height={50}
          priority
        />
      </div>
    </header>
  );
}
