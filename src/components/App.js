import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleFilterChange(e) {
    setFilters(e.target.value)
  }

  function handleFindPetsClick() {
      if (filters === "dog") {
        fetch("http://localhost:3001/pets?type=dog")
        .then(res => res.json())
        .then(petData => setPets(petData))
      } else if (filters === "cat") {
        fetch("http://localhost:3001/pets?type=cat")
        .then(res => res.json())
        .then(petData => setPets(petData))
      } else if (filters === "micropig") {
        fetch("http://localhost:3001/pets?type=micropig")
        .then(res => res.json())
        .then(petData => setPets(petData))
      } else {
        fetch("http://localhost:3001/pets")
        .then(res => res.json())
        .then(petData => setPets(petData))
      }
    
  }

  function handleAdoptPet(adoptedPetId) {
    const updatedPets = pets.map((pet) => {
      if(pet.id === adoptedPetId) {
        return {...pet, isAdopted: true}
      }
      return pet;
    });
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleFilterChange}
            onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;