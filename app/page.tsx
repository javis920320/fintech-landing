import Image from "next/image";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12">
    <Header />
    <h1 className="text-2xl sm:text-4xl font-bold text-center">
      Bienvenido a la app de productos
    </h1>
    <p className="mt-4 text-base sm:text-lg text-center">
      Explora nuestros productos y servicios financieros.
    </p>
    <ProductList />
  </main>
  );
}
