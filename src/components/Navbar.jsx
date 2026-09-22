function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
      <h2 className="text-lg font-semibold text-slate-900">Angelene Mae Posadas</h2>
      <ul className="flex gap-6 text-sm text-slate-600">
        <li className="cursor-pointer hover:text-teal-700">About</li>
        <li className="cursor-pointer hover:text-teal-700">Skills</li>
        <li className="cursor-pointer hover:text-teal-700">Projects</li>
        <li className="cursor-pointer hover:text-teal-700">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;