import Header from "../../components/Header/Header";
import PageStyled from "../PageStyled";
import Navigation from "../../components/Navigation/Navigation";

const CreatePage = () => {
  return (
    <PageStyled>
      <Header />
      <div className="frame">
        <Navigation />
      </div>
    </PageStyled>
  );
};

export default CreatePage;
