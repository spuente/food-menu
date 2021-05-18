import { Grid } from "@material-ui/core"
import FoodCard from "./FoodCard"

const FoodMenu = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <FoodCard
          title="Pizza"
          description="Pizza description"
          imageUrl="/pics/pizza.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FoodCard
          title="Hamburguer"
          description="Hamburguer description"
          imageUrl="/pics/hamburguer.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FoodCard
          title="French Fries"
          description="French Fries description"
          imageUrl="/pics/fries.jpg"
        />
      </Grid>
    </Grid>
  )
}

export default FoodMenu
