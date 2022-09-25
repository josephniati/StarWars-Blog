
import React from "react";

export const Cards = (props) => {

return (
<div>
<div className="card" style={{width: "18rem"}}>
  <img src="/" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className={"card-title"}>{props.person.name}</h5>
    <p className="card-text">Gender:{props.person.gender}</p>
    <p className="card-text">Hair-Color:{props.person.hair_color}</p>
    <p className="card-text">Eye-Color:{props.person.eye_color}</p>

  </div>
  
  <div className="card-body">
    
  </div>
</div>
</div>


)

}
	

   