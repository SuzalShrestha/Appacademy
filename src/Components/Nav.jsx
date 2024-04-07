import Image from "next/image";
function Nav() {
  return (
    <div className="flex-row max-w-7xl mx-auto">
      <nav className="flex justify-between h-24 items-center">
        <Image
          src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/6269b3a19f67fd137a262d0a_A%20Logo%20Main%20-%20Red.svg"
          width={160}
          height={160}
          alt="Logo"
        />
        <ul className="flex gap-10 items-center">
          <li>Immesive Programs</li>
          <li>Prepare</li>
          <li>Enterprise</li>
          <li>About</li>
          <li>
            <button className="bg-[#d0021b] px-5 py-2 rounded text-white">
              Apply Now
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
