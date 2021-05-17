import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"

const FoodMenu = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                Some Title 1
              </Typography>
              <Typography>Some description 1</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => alert("You like item #1")} color="primary">
              Like
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                Some Title 2
              </Typography>
              <Typography>Some description 2</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => alert("You like item #2")} color="primary">
              Like
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FoodMenu
