export default function Button(props, className)
{
   console.log(props);
   return (
      <button
         type="button"
         className={ props.className || className || "btn" }
         onClick={ props.onClick }
      >
         { props.label || props.children }
      </button>
   )
}