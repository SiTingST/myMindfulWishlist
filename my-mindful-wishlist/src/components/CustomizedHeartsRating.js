import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function CustomizedHeartsRating() {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <StyledRating
        name="customized-color"
        defaultValue={0}
        readOnly
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={
          <FavoriteBorderIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
      />
    </Box>
  );
}
