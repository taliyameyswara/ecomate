import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Tutorial Pengolahan Sampah",
    description:
      "Pelajari cara mengolah sampah dengan bijak untuk menjaga lingkungan dengan video tutorial kami.",
    link: "/tutorial",
  },
  {
    title: "Eco-Friendly Shop",
    description:
      " Temukan produk-produk ramah lingkungan untuk gaya hidup yang lebih eco-friendly di rekomendasi kami.",
    link: "/shop",
  },
  {
    title: "Eco-Friendly Cafe & Resto",
    description:
      "Kunjungi kafe dan restoran yang mendukung keberlanjutan lingkungan.",
    link: "/cafe",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Welcome Card */}
      <div className="card bg-white rounded-3xl p-5 grid grid-cols-2 items-center shadow">
        <div className="pl-20 space-y-3">
          <h1 className="text-xl">
            Hello, <span className="font-semibold">Ratu!</span> 👋
          </h1>
          <h1 className="text-4xl">
            Welcome to{" "}
            <span className="font-semibold text-primary">Ecomate!</span>
          </h1>
          <p className="mt-4 text-gray-500">Have a nice day!</p>
        </div>
        <figure>
          <img src="banner.png" alt="Banner" className="w-[80%] mx-auto" />
        </figure>
      </div>

      {/* Menus Section */}
      <h1 className="text-2xl font-semibold mt-10">Menus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="card bg-gradient p-7 h-56 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h1 className="text-white text-xl font-bold">{menu.title}</h1>
              <p className="text-white text-sm mt-2">{menu.description}</p>
            </div>
            <NavLink to={menu.link}>
              <button className="flex items-center text-white font-semibold mt-auto group">
                Lihat Selengkapnya
                <ArrowRightIcon className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
