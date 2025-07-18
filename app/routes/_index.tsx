import { Link } from "@remix-run/react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Remix Page</h1>
      <p className="mb-6 text-gray-600">Explore my profile, work and contact details.</p>
      <nav className="flex space-x-4">
        <Link to="/cv" className="text-blue-600 hover:underline">CV</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
        <Link to="/gallery" className="text-blue-600 hover:underline">Gallery</Link>
      </nav>
    </main>
  );
}