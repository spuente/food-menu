import { Grid } from "@material-ui/core"
import FoodCard from "./FoodCard"
import foodList from "../data/foodList"

const FoodMenu = () => {
  return (
    <Grid container spacing={3}>
      {foodList.map(({ title, description, imageUrl }) => (
        <Grid item key={title} xs={12} sm={6} md={4}>
          <FoodCard
            title={title}
            description={description}
            imageUrl={imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default FoodMenu
