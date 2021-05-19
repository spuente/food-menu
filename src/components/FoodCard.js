import {
  Box,
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

const FoodCard = ({ imageUrl, title, description, price }) => {
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
          <Box display="flex">
            <Box width="100%" p={1}>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
            </Box>
            <Box flexShrink={0} p={1}>
              <Typography variant="h5" component="h2">
                ${price}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <Typography>{description}</Typography>
          </Box>
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
