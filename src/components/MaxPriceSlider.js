import { Box, Grid, Slider, Typography } from "@material-ui/core"

const MaxPriceSlider = ({ marks, setMaxPrice, defaultPrice, min, max }) => {
  const handleOnChange = (event, value) => {
    setMaxPrice(value)
  }

  return (
    <Box p={1}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h5" component="h2">
            Max price
          </Typography>
          <Slider
            defaultValue={defaultPrice}
            valueLabelDisplay="auto"
            marks={marks}
            min={min}
            max={max}
            onChangeCommitted={handleOnChange}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MaxPriceSlider
