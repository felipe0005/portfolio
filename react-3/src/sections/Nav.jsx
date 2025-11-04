export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 shadow">
      <div className="absolute inset-0 stars -z-10"></div>
      <ul className="flex gap-8 text-white font-semibold text-lg">
        <li>
          <a href="#hero" className="hover:text-pink-400 transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-500 transition">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-pink-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-500 transition">
            Proyectos
          </a>
        </li>
        {/*<li>
          <a href="#form" className="hover:text-pink-400 transition">
            Formulario
          </a>
        </li>*/}
      </ul>
    </nav>
  );
}
