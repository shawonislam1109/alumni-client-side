import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setEditModal } from "../../../Redux/feature/ModalSlice";
import UserEdit from "./UserEdit";
import { useSingleStudentQuery } from "../../../Redux/apiSlice/apiSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400, md: 700 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ id }) => {
  const { data: singleData } = useSingleStudentQuery(id);
  const { editModal } = useSelector((state) => state.ModalSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={editModal}
        onClose={() => dispatch(setEditModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserEdit singleData={singleData} />
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
