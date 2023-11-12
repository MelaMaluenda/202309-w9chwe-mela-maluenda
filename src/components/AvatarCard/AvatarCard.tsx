import AvatarStructure from "../../store/types";
import AvatarCardStyled from "./AvatarCardStyled";

interface AvatarCardProps {
  avatar: AvatarStructure;
}

const AvatarCard = ({
  avatar: {
    name,
    pictureUrl,
    element,
    characterTotem,
    book,
    audiovisual,
    videoGame,
  },
}: AvatarCardProps): React.ReactElement => {
  return (
    <AvatarCardStyled className="card">
      <h2 className="card__name">{name}</h2>
      <img
        className="card__image"
        src={pictureUrl}
        alt={`Portrait of ${name}`}
        width="400"
        height="250"
      />
      <div className="card__choice">
        <img
          className="card__choice--totem"
          src={`images/${element}.webp`}
          alt={`Icon element: ${element}`}
          width="60"
          height="60"
        />
        <img
          className="card__choice--totem"
          src={`images/${characterTotem}.webp`}
          alt={`Icon character totem: ${element}`}
          width="40"
          height="60"
        />
      </div>
      <div className="card__fiction">
        <h3 className="card__fiction--fantasy"> 📖 {book}</h3>
        <h3 className="card__fiction--fantasy"> 🎥 {audiovisual}</h3>
        <h3 className="card__fiction--fantasy"> 🎮 {videoGame}</h3>
      </div>
    </AvatarCardStyled>
  );
};

export default AvatarCard;
