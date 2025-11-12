import PetList from "@/components/PetList";
import FilterContainer from "@/components/FilterContainer";
import Footer from "@/components/Footer";

import { Suspense } from "react";
export default async function Home({ searchParams }) {
  const { category } = await searchParams;
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-white">
      <section className="flex gap-4 overflow-x-auto py-4">
        <FilterContainer selectedCategory={category} />
      </section>
      <section className="grid flex-1 grid-cols-2 gap-4 overflow-y-auto py-4">
        <Suspense>
          <PetList category={category} />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
