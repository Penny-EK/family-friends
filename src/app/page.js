import Image from "next/image";
// components
import PetList from "@/components/PetList";
import FilterOption from "@/components/FilterOption";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="flex gap-4 overflow-x-auto py-4">
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
      </section>
      <PetList />
      <Footer />
    </main>
  );
}
