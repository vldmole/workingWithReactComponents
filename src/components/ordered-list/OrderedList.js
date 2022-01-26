import ListItem from "../list-item/ListItem.js";

const OrderedList = (props) =>
{
   let list = [];
   props.itens.sort();
   for (const item of props.itens)
      list.push(<ListItem key={list.length} text={ item } />);
   
   return (<ol>
      { 
         list
      }
   </ol>
   )
}

export default OrderedList;