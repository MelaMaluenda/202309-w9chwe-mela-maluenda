import avatarsData from "../../data/avatarData/avatarsData";
import AvatarCard from "../AvatarCard/AvatarCard";
import AvatarListStyled from "./AvatarListStyled";

const avatars = avatarsData;

const AvatarList = () => {
  return (
    <AvatarListStyled>
      <div className="avatar-list">
        {avatars.map((avatar) => (
          <li className="avatar-list__item" key={avatar.id}>
            <AvatarCard avatar={avatar} />
          </li>
        ))}
      </div>
    </AvatarListStyled>
  );
};

export default AvatarList;
