// components
import PetList from "@/components/PetList";
import FilterContainer from "@/components/FilterContainer";
import Footer from "@/components/Footer";

import { Suspense } from "react";
export default async function Home({ searchParams }) {
  const { category } = await searchParams;
  return (
    <main className="bg-white">
      <section className="flex gap-4 overflow-x-auto py-4">
        <FilterContainer selectedCategory={category} />
      </section>
      <section className="grid h-[80vh] grid-cols-2 gap-4 overflow-y-scroll py-4">
        <Suspense>
          <PetList category={category} />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
