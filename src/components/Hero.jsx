export default function Hero() {
  return (
    <section className="bg-black text-white text-center py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Bring AI into Your School
      </h1>

      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        A complete AI ecosystem designed for students, teachers, and school leadership.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Book Demo
        </button>
        <button className="border px-6 py-3 rounded-lg hover:bg-gray-800">
          Explore Products
        </button>
      </div>
    </section>
  );
}