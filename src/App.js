import { useState } from "react"
import { Container } from "@material-ui/core"
import FoodMenu from "./components/FoodMenu"
import MaxPriceSlider from "./components/MaxPriceSlider"

function App() {
  const defaultPrice = 4
  const [maxPrice, setMaxPrice] = useState(defaultPrice)
  const marks = [
    { value: 1, label: "$1" },
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
    { value: 15, label: "$15" },
  ]
  return (
    <Container>
      <h1>FOOD MENU</h1>
      <MaxPriceSlider
        marks={marks}
        setMaxPrice={setMaxPrice}
        defaultPrice={defaultPrice}
        min={1}
        max={15}
      />
      <FoodMenu maxPrice={maxPrice} />
    </Container>
  )
}

export default App
