import React from "react";

export const CardsPlanets= (props) => {

return (
<div>
<div className="card" style={{width: "18rem"}}>
  <img src="/" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className={"card-title"}>{props.planet.name}</h5>
    <p className="card-text">Population:{props.planet.population}</p>
    <p className="card-text">Terrain:{props.planet.terrain}</p>

  </div>
  
  <div className="card-body">
    
  </div>
</div>
</div>


)

}
	