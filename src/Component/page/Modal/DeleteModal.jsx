import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../Redux/feature/ModalSlice";
import { useUserDeleteMutation } from "../../../Redux/apiSlice/apiSlice";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [deleted, { data }] = useUserDeleteMutation();
  const deletedData = (id) => {
    deleted(id);
    dispatch(setDeleteModal(false));
    toast.success("Deleted success");
    localStorage.clear();
  };

  const { deleteModal } = useSelector((state) => state.ModalSlice);
  return (
    <div>
      <Modal
        open={deleteModal}
        onClose={() => dispatch(setDeleteModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to delete it , If you want to delete it plz press the
            delete button
          </Typography>
          <Box display="flex" justifyContent="end">
            <Button
              onClick={() => deletedData(id)}
              color="error"
              variant="contained"
              size="small"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default DeleteModal;
