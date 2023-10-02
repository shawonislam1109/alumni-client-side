import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdminDelete,
  setDeleteModal,
} from "../../../Redux/feature/ModalSlice";
import { useUserDeleteMutation } from "../../../Redux/apiSlice/apiSlice";
import { Button } from "@mui/material";
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

const AdminDelete = ({ deleteId }) => {
  const dispatch = useDispatch();
  const [deleted] = useUserDeleteMutation();

  const deletedData = (id) => {
    deleted(id);
    dispatch(setAdminDelete(false));
    toast.success("Deleted success");
  };

  const { adminDelete } = useSelector((state) => state.ModalSlice);
  return (
    <div>
      <Modal
        open={adminDelete}
        onClose={() => dispatch(setAdminDelete(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to delete it , If you want to delete it plz press the
            delete button adminModal
          </Typography>
          <Box display="flex" justifyContent="end">
            <Button
              onClick={() => deletedData(deleteId)}
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
export default AdminDelete;
