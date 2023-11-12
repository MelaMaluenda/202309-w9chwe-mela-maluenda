import AvatarList from "../../components/AvatarList/AvatarList";
import Header from "../../components/Header/Header";
import PageStyled from "../PageStyled";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = () => {
  return (
    <PageStyled>
      <Header />
      <div className="frame">
        <Navigation />
      </div>
      <AvatarList />
    </PageStyled>
  );
};

export default HomePage;
