import { Grid } from "@material-ui/core"
import FoodCard from "./FoodCard"
import foodList from "../data/foodList"

const FoodMenu = ({ maxPrice }) => {
  return (
    <Grid container spacing={3}>
      {foodList
        .filter((food) => food.price <= maxPrice)
        .map((food) => (
          <Grid item key={food.title} xs={12} sm={6} md={4}>
            <FoodCard {...food} />
          </Grid>
        ))}
    </Grid>
  )
}

export default FoodMenu
