import { SuccesButton, DangerButton } from "../button/CommonButtons";
import { useState } from "react";

const Card = ()=>
{
   const [count, setCount] = useState(0);
 
   function add()
   {
      setCount(count + 1);
   };
   
   function sub()
   {
      setCount(count - 1);
   };

   return (
      <div className="card">
         <div className="card-header">
            Featured
         </div>
         <div className="card-body">
            <SuccesButton label="Add" onClick={ add }/>
            <DangerButton onClick={ sub }>
               Sub
            </DangerButton>
            <p>{ count }</p>
         </div>         
      </div>
   )
}

export default Card;