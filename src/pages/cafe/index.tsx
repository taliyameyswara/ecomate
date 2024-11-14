import Heading from "../../components/heading";
import Filter from "../../components/filter";
import LocationCard from "../../components/location-card";

const cafes = [
  {
    title: "Kopi Nako",
    image: "card4.png",
    address:
      "Jl. Rw. Belong, Palmerah, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
    category: "Cafe",
    link: "https://maps.app.goo.gl/1LWZBshjQDGKCPDn8",
    rating: 4,
    distance: "1.2 KM",
  },
  {
    title: "Burgreens",
    image: "card3.png",
    address:
      "Jl. K.H. Wahid Hasyim No.47 1, RT.1/RW.4, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
    category: "Resto",
    link: "https://maps.app.goo.gl/kyqZTGKU4nGT9a8k7",
    rating: 5,
    distance: "2.8 KM",
  },
  {
    title: "Fresh Bread",
    image: "card2.png",
    address:
      "Jl. Tebet Barat Dalam VIII No.12, Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810",
    category: "Cafe",
    link: "https://maps.app.goo.gl/uPVgowGaCX5wgA1z5",
    rating: 3,
    distance: "3.5 KM",
  },
];

const Cafe = () => {
  const filters = ["ALL", "CAFE", "RESTO"];
  return (
    <div className="container mx-auto p-6 bg-gray-100 space-y-6">
      <Heading title="Eco-Friendly Cafe & Resto" subtitle="Stay sustainable!" />
      <Filter filters={filters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map((cafe, index) => (
          <LocationCard
            key={index}
            title={cafe.title}
            image={cafe.image}
            address={cafe.address}
            category={cafe.category}
            link={cafe.link}
            rating={cafe.rating}
            distance={cafe.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default Cafe;
