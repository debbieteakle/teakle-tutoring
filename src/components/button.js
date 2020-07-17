import React from "react"

class Button extends React.Component {
  render() {
    return <button className="text-white font-bold py-2 px-4 rounded bg-blue-400 hover:bg-blue-600 my-4">{this.props.name}</button>;
  }
}

export default Button;

/*.button {
	background: #2EA3F2;
    color: #fff;
    border: 1px solid #46aef3;
   padding: 12px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   font-size: 20px;
   font-family: 'PT Sans',Helvetica,Arial,Lucida,sans-serif;
   text-decoration: none;
   vertical-align: middle;
   }*/
/*
.button:hover {
   border: 1px solid #2EA3F2;
   background: #0c7cc7;
   color: #fff;
   }

.button:active {
   border: 1px solid #6fa029;
   background: #8fcc38;
   }
*/