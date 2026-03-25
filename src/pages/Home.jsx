import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
    </div>
  );
}

export default Home;
