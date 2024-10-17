// src/components/PokemonForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //allows redirects


const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate(); //redirecting 


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPokemon(formData); //form data is being passed up. to the addpokemon function in app.jsx 
    setFormData(initialState);  
    navigate('/pokemon'); //redirct to pokemon all page
    };

  //usually just use (e) + e.target... 
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;