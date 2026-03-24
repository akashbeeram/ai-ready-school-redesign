export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">AI Ready School</h1>

      <div className="hidden md:flex gap-6 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
        Book Demo
      </button>
    </nav>
  );
}