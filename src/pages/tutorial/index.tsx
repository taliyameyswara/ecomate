import Filter from "../../components/filter";
import Heading from "../../components/heading";
import VideoCard from "../../components/video-card";

const Tutorial = () => {
  return (
    <div className="container  bg-gray-100 space-y-6">
      <Heading
        title="Tutorial Pengolahan Sampah"
        subtitle="Stay sustainable!"
      />
      <Filter />
      <VideoCard
        title="Sayuran"
        category="Makanan"
        duration="10 Menit"
        progress={50}
      />
    </div>
  );
};

export default Tutorial;
