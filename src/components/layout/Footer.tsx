export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500 sm:px-12">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Voltcell. All rights reserved.</p>
        <p>Power that keeps up with you.</p>
      </div>
    </footer>
  );
}
