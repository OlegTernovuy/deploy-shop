import { TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <TextField
    type="search"
    variant="outlined"
    size="small"
    sx={{
      border: "none",
      "& fieldset": { border: "none" },
      backgroundColor: "white",
      borderRadius: "4px",
      width: '100%',
      marginRight: '24px',
    }}
    // className="text-white"
    InputProps={{
      endAdornment: (
        <button>
          <SearchIcon className="text-bgDark" fontSize="medium" />
        </button>
      ),
    }}
  />
  )
}

export default SearchField