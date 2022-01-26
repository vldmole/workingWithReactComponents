const ListItem = (props) =>
{
   return (
      <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
         { props.text }
      </a>
   )
}

export default ListItem;