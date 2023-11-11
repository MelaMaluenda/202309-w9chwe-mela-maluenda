import PageStyled from "../PageStyled";

const HomePage = () => {
  return (
    <PageStyled>
      <header className="head">
        <img
          className="head__image"
          src="/images/witch-hat.webp"
          alt="Dibujo de un sombrero de bruja"
          width="200px"
          height="200px"
        />
        <h1 className="head__title">Aquelarre</h1>
        <h2 className="head__secondary-title">〰️ Ficción fantástica 〰️</h2>
      </header>
    </PageStyled>
  );
};

export default HomePage;
