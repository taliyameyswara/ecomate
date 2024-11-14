import Filter from "../../components/filter";
import Heading from "../../components/heading";
import VideoCard from "../../components/video-card";

const tutorials = [
  {
    title: "Sayuran",
    category: "Makanan",
    duration: "10 Menit",
    image: "card5.png",
    link: "https://www.youtube.com/watch?v=kwajGch9cKA&pp=ygUidHV0b3JpYWwgcGVuZ29sYWhhbiBzYW1wYWggc2F5dXJhbg%3D%3D",
    progress: 50,
  },
  {
    title: "Buah-buahan",
    category: "Makanan",
    duration: "15 Menit",
    image: "card9.png",
    link: "https://www.youtube.com/watch?v=M0Mgr2AXvSU&pp=ygUfdHV0b3JpYWwgcGVuZ29sYWhhbiBzYW1wYWggYnVhaA%3D%3D",
    progress: 70,
  },
  {
    title: "Botol Plastik",
    category: "Barang",
    duration: "20 Menit",
    image: "card6.png",
    link: "https://www.youtube.com/watch?v=JQocEeIuKxM&pp=ygUodHV0b3JpYWwgcGVuZ29sYWhhbiBzYW1wYWggcGxhc3RpayBib3RvbA%3D%3D",
    progress: 30,
  },
];

const Tutorial = () => {
  const filters = ["ALL", "SAYURAN", "BUAH", "BARANG"];
  return (
    <div className="container  bg-gray-100 space-y-6">
      <Heading
        title="Tutorial Pengolahan Sampah"
        subtitle="Stay sustainable!"
      />
      <Filter filters={filters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <VideoCard
            key={index}
            title={tutorial.title}
            category={tutorial.category}
            duration={tutorial.duration}
            image={tutorial.image}
            link={tutorial.link}
            progress={tutorial.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
