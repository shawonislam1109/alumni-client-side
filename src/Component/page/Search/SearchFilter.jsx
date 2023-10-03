import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFilterDepart,
  setFilterGlobal,
  setFilterStatus,
} from "../../../Redux/feature/SearchSlice";

const SearchFilter = () => {
  const dispatch = useDispatch();
  // state filter by search
  const [searchText, setSearchText] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);

  // dispatch SearchSlice
  dispatch(setFilterDepart(searchDepartment));
  dispatch(setFilterStatus(searchStatus));
  dispatch(setFilterGlobal(searchText));

  return (
    <Box display={{ md: "flex" }} justifyContent="space-between">
      {/* search text filed */}
      <Box>
        <TextField
          variant="filled"
          size="small"
          color="secondary"
          placeholder="Search...."
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box display={{ md: "flex" }} gap={2}>
        {/* search by student department */}
        <Box>
          <FormControl sx={{ width: { md: 180, xs: 200 } }}>
            <InputLabel htmlFor="grouped-select">Filter Department</InputLabel>
            <Select
              size="small"
              defaultValue=""
              onChange={(e) => setSearchDepartment(e.target.value)}
              id="grouped-select"
              variant="filled"
              color="secondary"
              label="job Status"
              fullWidth
            >
              <MenuItem value="">NO Filter</MenuItem>
              <MenuItem value="computer">Computer</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="mechanical">mechanical</MenuItem>
              <MenuItem value="Cvil">Cvil</MenuItem>
              <MenuItem value="Power">Power</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* search by student Status */}
        <Box>
          <FormControl sx={{ width: { md: 180, xs: 200 } }}>
            <InputLabel htmlFor="grouped-select">Filter Status</InputLabel>
            <Select
              size="small"
              defaultValue=""
              onChange={(e) => setSearchStatus(e.target.value)}
              id="grouped-select"
              variant="filled"
              color="secondary"
              label="job Status"
              fullWidth
            >
              <MenuItem value="">NO Filter</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchFilter;
