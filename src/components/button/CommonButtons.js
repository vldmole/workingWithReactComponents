import Button from "./Button";

export function SuccesButton(props)
{
   return Button({ ...props, className:"btn btn-success"});
}

export const DangerButton = (props) =>
{
   return Button({ ...props, className: "btn btn-danger" });
}
