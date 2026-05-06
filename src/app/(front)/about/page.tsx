import Link from "next/link";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <div>
      <p className="text-sky-500 mb-4">About Us</p>
      <Link href="/">Home</Link>
    </div>
  );
}