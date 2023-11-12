import { useAppSelector } from "../../store/features/hooks";
import AvatarCard from "../AvatarCard/AvatarCard";
import AvatarListStyled from "./AvatarListStyled";

const AvatarList = () => {
  const aquelarre = useAppSelector((state) => state.avatarState.avatars);

  return (
    <AvatarListStyled>
      <div className="avatar-list">
        {aquelarre.map((avatars) => (
          <li className="avatar-list__item" key={avatars.id}>
            <AvatarCard avatar={avatars} />
          </li>
        ))}
      </div>
    </AvatarListStyled>
  );
};

export default AvatarList;
