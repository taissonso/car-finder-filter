import FilterCars from "@/components/FilterCars";

export default function Home() {
  return (
    <main>
      <div className="flex gap-6 w-full max-w-[1560px] mx-auto py-20">
        <FilterCars />
      </div>
    </main>
  );
}
