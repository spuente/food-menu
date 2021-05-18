import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
  IconButton,
  CardMedia,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { Favorite } from "@material-ui/icons"

const useStyles = makeStyles({
  media: {
    height: 200,
  },
})

const FoodMenu = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/pics/hamburguer.jpg"
              title="Hamburguer"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Hamburguer
              </Typography>
              <Typography>Hamburguer description</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => alert("You like Hamburguer")} color="primary">
              Like
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/pics/fries.jpg"
              title="French Fries"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                French Fries
              </Typography>
              <Typography>French Fries description</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton
              onClick={() => alert("You like French Fries")}
              color="default"
            >
              <Favorite />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FoodMenu
