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

const FoodCard = ({ imageUrl, title, description }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => alert(`You like ${title}`)} color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  )
}

export default FoodCard
