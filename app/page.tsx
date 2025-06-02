import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <Sidebar />
        </aside>

        <main className="lg:w-3/4">Main GRID</main>
      </div>
    </div>
  );
}
