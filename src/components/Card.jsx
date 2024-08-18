import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
     <Detail tel = {props.tel} email ={props.email} />
    </div>
  );
}

export default Card;
 