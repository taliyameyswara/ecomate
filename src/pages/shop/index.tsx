import Heading from "../../components/heading";
import Filter from "../../components/filter";
import LocationCard from "../../components/location-card";

const Shop = () => {
  return (
    <div className="container bg-gray-100 space-y-6">
      <Heading title="Eco-Friendly Shop" subtitle="Stay sustainable!" />
      <Filter />
      <LocationCard
        title="The Body Shop Central Park"
        image="card9.png"
        address="Letjen S. Parman No.28, RT.12/RW.6, Tj. Duren Sel., Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
        category="Bodycare"
        link="https://www.google.com/maps"
        rating={4}
        distance="1.2 KM"
      />
    </div>
  );
};

export default Shop;
