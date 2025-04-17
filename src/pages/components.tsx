import ButtonsDoc from "@/registry/docs/buttons";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Component Library</h1>
        <p className="mt-2">
          A collection of reusable UI components for your application
        </p>
      </header>

      <section className="space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Buttons</h2>
          <ButtonsDoc />
        </div>

        {/* Add more component categories here as your library grows */}
      </section>
    </div>
  );
}
