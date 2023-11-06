import BgImage from "../components/BgImage";
import ChangeTextHome from "../components/ChangeTextHome";
import Count from "../components/Count";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Think from "../components/Think";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BgImage />
      <ChangeTextHome />
      <Think />
      <Count />
      <Footer />
    </div>
  );
};

export default Home;
