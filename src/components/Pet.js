import React from "react";

function Pet({pet, onAdoptPet}) {
//console.log(pet)
  const {age, gender, name, type, weight, isAdopted} = pet

  function handleClick() {
    onAdoptPet(pet.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ?'♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
        <button className="ui disabled button">Already adopted</button> :
        <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;