import { Dispatch, SetStateAction } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Rating from "@mui/material/Rating";

const starsArr: number[] = Array.from({ length: 4 }, (_, i) => i + 1);

const RatingFilter: React.FC<{
  chosenRating: string;
  ratingHandler: Dispatch<SetStateAction<string>>;
}> = ({ chosenRating, ratingHandler }) => {
  const handleValue = (event: SelectChangeEvent) => {
    ratingHandler(event.target.value);
  };

  return (
    <FormControl variant="filled">
      <InputLabel>Ratings: </InputLabel>
      <Select
        value={chosenRating}
        onChange={handleValue}
        sx={{ minWidth: "12rem", height: "4rem" }}
      >
        {starsArr.map((num) => {
          return (
            <MenuItem key={num} value={num}>
              <Rating name="read-only" value={num} readOnly /> <b>& Up</b>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default RatingFilter;
