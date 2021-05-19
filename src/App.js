import FoodMenu from "./components/FoodMenu"
import { Box, Container, Grid, Slider, Typography } from "@material-ui/core"

function App() {
  const marks = [
    { value: 1, label: "$1" },
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
    { value: 15, label: "$15" },
  ]
  return (
    <Container>
      <h1>FOOD MENU</h1>
      <Box p={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h5" component="h2">
              Max price
            </Typography>
            <Slider
              defaultValue={4}
              valueLabelDisplay="auto"
              marks={marks}
              min={1}
              max={15}
            />
          </Grid>
        </Grid>
      </Box>
      <FoodMenu maxPrice={4} />
    </Container>
  )
}

export default App
