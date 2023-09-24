import { useNavigate } from "react-router-dom";
import { useUserGetDataQuery } from "../../Redux/apiSlice/apiSlice";

const ProfilePrivate = ({ children }) => {
  const navigate = useNavigate();
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );

  if (filterLogin) {
    return children;
  }
  return navigate("/");
};

export default ProfilePrivate;
