import Banner from "@/components/HomePage/Banner";
import InstaGallery from "@/components/HomePage/InstaGallery";
import MagazineSlider from "@/components/HomePage/MagazineSlider";
import SocialShow from "@/components/HomePage/SocialShow";

const Home = () => {
  return (
    <main>
      <Banner />
      <SocialShow />
      <MagazineSlider />
      <InstaGallery />
    </main>
  );
};

export default Home;
