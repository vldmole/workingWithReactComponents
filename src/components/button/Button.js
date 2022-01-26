export default function Button(props)
{
   return (
      <button
         type="button"
         className = { props.className || "btn" }
         onClick={ props.onClick }
      >
         { props.label || props.children }
      </button>
   )
}