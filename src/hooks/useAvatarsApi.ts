import { useCallback } from "react";
import AvatarStructure from "../store/types";

const useAvatarsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getAquelarre = useCallback(async (): Promise<AvatarStructure[]> => {
    const response = await fetch(`${apiUrl}/aquelarre`);
    const aquelarre = (await response.json()) as AvatarStructure[];

    return aquelarre;
  }, [apiUrl]);

  return { getAquelarre };
};

export default useAvatarsApi;
