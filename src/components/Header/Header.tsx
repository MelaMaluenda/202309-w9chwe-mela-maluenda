import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled className="head">
      <img
        className="head__image"
        src="/images/witch-hat.webp"
        alt="Dibujo de un sombrero de bruja"
        width="200px"
        height="200px"
      />
      <h1 className="head__title">Aquelarre</h1>
    </HeaderStyled>
  );
};

export default Header;
