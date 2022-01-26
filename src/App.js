import ListItem from "./components/list-item/ListItem.js";
import OrderedList from "./components/ordered-list/OrderedList";
import Card from "./components/card/card.js";
import Button from "./components/button/Button.js";

function App()
{
  const itens = ["item 0", "item 3", "item 2"];
  return (
    <> 
      <h1>A first component</h1>
      <ul>
        <ListItem text="Item 1"/>
        <ListItem text="Item 1" />
        <ListItem text="Item 1" />
        <li>Item 4</li>
      </ul>

      <OrderedList itens={ itens } />

      <Card />

      <Button label='label' />
    </>
  )
}

export default App;
