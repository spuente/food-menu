import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"

const useStyles = makeStyles({
  media: {
    height: 200,
  },
})

const FoodCard = ({ imageUrl, title, description }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

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
        <Button onClick={handleClick} color="primary">
          Like
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
          message={`You like ${title}`}
        />
      </CardActions>
    </Card>
  )
}

export default FoodCard
