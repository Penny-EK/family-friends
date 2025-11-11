import Image from "next/image";
// components
import PetList from "@/components/PetList";
import FilterOptions from "@/components/FilterOptions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="flex gap-4 overflow-x-auto py-4">
        <FilterOptions />
      </section>
      <section className="grid grid-cols-2 gap-4 py-4">
        <PetList />
      </section>
      <Footer />
    </main>
  );
}
