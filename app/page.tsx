import Categories from "./components/categories";
import PropertyList from "./components/properties/propertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories/>
      <PropertyList/>
    </main>
  );
}
