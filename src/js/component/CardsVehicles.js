import React from "react";

export const CardsVehicles= (props) => {

return (
<div>
<div className="card" style={{width: "18rem"}}>
  <img src="/" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className={"card-title"}>{props.vehicle.name}</h5>
    <p className="card-text">Model:{props.vehicle.model}</p>
    <p className="card-text">Make:{props.vehicle.manufacturer}</p>

  </div>
  
  <div className="card-body">
    
  </div>
</div>
</div>
)
}