import { useLocation } from "react-router-dom";

export const GetPathName = () => {
  const location = useLocation();
  return location.pathname as string;
};
