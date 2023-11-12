import AvatarList from "../../components/AvatarList/AvatarList";
import Header from "../../components/Header/Header";
import PageStyled from "../PageStyled";

const HomePage = () => {
  return (
    <PageStyled>
      <Header />
      <h2 className="frame">Ficción fantástica</h2>
      <AvatarList />
    </PageStyled>
  );
};

export default HomePage;
