import { useDispatch } from "react-redux";
import useAvatarsApi from "../../hooks/useAvatarsApi";
import { useEffect } from "react";
import { loadAvatarsActionCreator } from "../../store/features/avatarsSlice";
import AvatarList from "../../components/AvatarList/AvatarList";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import PageStyled from "../PageStyled";

const HomePage = () => {
  const dispatch = useDispatch();
  const { getAquelarre } = useAvatarsApi();

  useEffect(() => {
    (async () => {
      const actualAvatars = await getAquelarre();

      dispatch(loadAvatarsActionCreator(actualAvatars));
    })();
  }, [dispatch, getAquelarre]);

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
