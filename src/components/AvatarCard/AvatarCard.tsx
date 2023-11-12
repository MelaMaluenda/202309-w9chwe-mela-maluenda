import AvatarStructure from "../../store/types";
import AvatarCardStyled from "./AvatarCardStyled";

interface AvatarCardProps {
  avatar: AvatarStructure;
}

const AvatarCard = ({ avatar }: AvatarCardProps): React.ReactElement => {
  return (
    <AvatarCardStyled className="card">
      <h2 className="card__name">{avatar.name}</h2>
      <img
        className="card__image"
        src={avatar.pictureUrl}
        alt={`Portrait of ${avatar.name}`}
        width="400"
        height="250"
      />
      <div className="card__choice">
        <img
          className="card__choice--totem"
          src={`images/${avatar.element}.webp`}
          alt={`Icon element: ${avatar.element}`}
          width="60"
          height="60"
        />
        <img
          className="card__choice--totem"
          src={`images/${avatar.characterTotem}.webp`}
          alt={`Icon character totem: ${avatar.element}`}
          width="40"
          height="60"
        />
      </div>
      <div className="card__fiction">
        <h3 className="card__fiction--fantasy"> 📖 {avatar.book}</h3>
        <h3 className="card__fiction--fantasy"> 🎥 {avatar.audiovisual}</h3>
        <h3 className="card__fiction--fantasy"> 🎮 {avatar.videoGame}</h3>
      </div>
    </AvatarCardStyled>
  );
};

export default AvatarCard;
