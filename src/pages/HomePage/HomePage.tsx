import AvatarList from "../../components/AvatarList/AvatarList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageStyled from "../PageStyled";

const HomePage = () => {
  return (
    <PageStyled>
      <Header />
      <h2 className="frame">Ficción fantástica</h2>
      <AvatarList />
      <Footer />
    </PageStyled>
  );
};

export default HomePage;
