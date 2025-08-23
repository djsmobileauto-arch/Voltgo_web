import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          ¡Bienvenido a Voltgo!
        </h1>
        <p className="mt-4 text-gray-700">
          Aquí irá la descripción principal de tu página 🚗⚡
        </p>
      </section>
    </main>
  );
}
