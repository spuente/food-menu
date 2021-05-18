import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  media: {
    height: 200,
  },
})

const FoodCard = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/pics/pizza.jpg"
          title="Pizza"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Pizza
          </Typography>
          <Typography>Pizza description</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => alert("You like Pizza")} color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  )
}

export default FoodCard
