const products = [
  { name: "Cypher", desc: "AI for students" },
  { name: "Morpheus", desc: "AI for teachers" },
  { name: "Zion", desc: "AI tools suite" },
  { name: "NEO", desc: "Innovation lab" },
  { name: "Matrix", desc: "Infrastructure" },
];

export default function Products() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl text-center font-bold mb-10">
        Our AI Ecosystem
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}