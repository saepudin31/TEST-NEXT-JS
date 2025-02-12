
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
         <h1 className="text-white text-2xl font-bold pl-8">Markaz hardware</h1>
     <input type="text" placeholder="Cari produk" className="py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"></input>
        <ul className="flex">
          <li className="mr-6">
            <Link legacyBehavior href="/">
              <a className="text-white hover:text-gray-400">Home</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link legacyBehavior href="/about">
              <a className="text-white hover:text-gray-400">About</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link legacyBehavior  href="/services">
              <a className="text-white hover:text-gray-400">Services</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a className="text-white hover:text-gray-400">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;













































































































































































































































































































































































































































































































































































































