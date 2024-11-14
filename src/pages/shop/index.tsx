import Heading from "../../components/heading";
import Filter from "../../components/filter";
import LocationCard from "../../components/location-card";

const locations = [
  {
    title: "The Body Shop Central Park",
    image: "card8.png",
    address:
      "Letjen S. Parman No.28, RT.12/RW.6, Tj. Duren Sel., Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
    category: "Bodycare",
    link: "https://maps.app.goo.gl/jpXB7mL4MzcrGtav9",
    rating: 4,
    distance: "1.2 KM",
  },
  {
    title: "Innisfree Senayan City",
    image: "card2.png",
    address:
      "Jl. Asia Afrika No.19 L-59,60,61, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 12190",
    category: "Skincare",
    link: "https://maps.app.goo.gl/o5WMnhw9exCecczR8",
    rating: 5,
    distance: "2.8 KM",
  },
  {
    title: "Green Earth Essentials",
    image: "card7.png",
    address:
      "Jl. Tebet Barat Dalam VIII No.12, Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810",
    category: "Home Goods",
    link: "https://maps.app.goo.gl/uPVgowGaCX5wgA1z5",
    rating: 3,
    distance: "3.5 KM",
  },
];

const Shop = () => {
  const filters = ["ALL", "BODYCARE", "SKINCARE", "HOME GOODS"];

  return (
    <div className="container bg-gray-100 space-y-6">
      <Heading title="Eco-Friendly Shop" subtitle="Stay sustainable!" />
      <Filter filters={filters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            title={location.title}
            image={location.image}
            address={location.address}
            category={location.category}
            link={location.link}
            rating={location.rating}
            distance={location.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
