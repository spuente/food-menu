import FoodMenu from "./components/FoodMenu"
import { Container } from "@material-ui/core"

function App() {
  return (
    <Container>
      <h1>FOOD MENU</h1>
      <FoodMenu maxPrice={4} />
    </Container>
  )
}

export default App
