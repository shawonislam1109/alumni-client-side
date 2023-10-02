import { useNavigate } from "react-router-dom";
import { useUserGetDataQuery } from "../../Redux/apiSlice/apiSlice";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );
  if (filterLogin?.role == "admin") {
    return children;
  }
  return navigate("/");
};

export default AdminRoute;
