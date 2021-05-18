import { Grid } from "@material-ui/core"
import FoodCard from "./FoodCard"
import foodList from "../data/foodList"

const FoodMenu = () => {
  return (
    <Grid container spacing={3}>
      {foodList.map((food) => (
        <Grid item key={food.title} xs={12} sm={6} md={4}>
          <FoodCard
            title={food.title}
            description={food.description}
            imageUrl={food.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default FoodMenu
