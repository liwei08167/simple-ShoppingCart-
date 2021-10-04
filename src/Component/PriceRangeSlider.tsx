import { Dispatch, SetStateAction } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

const PriceRangeSlider: React.FC<{
  sliderValue: number[];
  handleSliderChange: Dispatch<SetStateAction<number[]>>;
}> = ({ sliderValue, handleSliderChange }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    handleSliderChange(newValue as number[]);
  };

  return (
    <FormControl variant="filled">
      <InputLabel>Price Range: </InputLabel>
      <Select sx={{ minWidth: "12rem", height: "4rem" }}>
        <MenuItem>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <p>Price Range Selected:</p>
            </Grid>
            <Grid item xs={12}>
              <span>$ {sliderValue[0]}</span> - <span>$ {sliderValue[1]}</span>
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <Box sx={{ width: 150 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={sliderValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  max={1000}
                />
              </Box>
            </Grid>
          </Grid>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default PriceRangeSlider;
