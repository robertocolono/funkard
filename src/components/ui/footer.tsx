export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-black py-8 text-center text-gray-500">
      <p className="text-sm">
        © {new Date().getFullYear()} Funkard — Da collezionisti, per collezionisti.
      </p>
    </footer>
  );
}