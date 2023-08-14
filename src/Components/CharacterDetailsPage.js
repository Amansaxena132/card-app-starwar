import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import './characterdetailspage.css';


const CharacterDetailsPage = () => {
  const {state} = useLocation();
  

  console.log(state)

  const navigate = useNavigate();

  return (
    <div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '8vh' }}>
        <Button type="primary" size='middle' onClick={() => navigate(-1)}> Back to character </Button>
      </div>
         
      <div style={{color:'purple',marginBottom:'20px'}}>
       <h1>{state.character.name}</h1>
      </div>

      <div className='containers'>
        <div className='image-container'>
          <img
            src={`https://picsum.photos/200/200?random=200`}
            alt="Character"
            className="character-image"
          />
        </div>

        <p>Height: {state.character.height} meters</p>
        <p>Mass: {state.character.mass} kg</p>
        <p>eye_color: {state.character.eye_color}</p>
        <p>eye_color: {state.character.eye_color}</p>
        <p>Appears in {state.character.films.length || 0} film(s)</p>

        {state.character.homeworldData && (
          <div>
            <h3>Homeworld</h3>
            <p>Name: {state.character.homeworldData.name}</p>
            <p>Terrain: {state.character.homeworldData.terrain}</p>
            <p>Climate: {state.character.homeworldData.climate}</p>
            <p>Number of residents: {state.character.homeworldData.residents.length || 0}</p>
          </div>
        )}
      </div> 
    </div>
  );
};

export default CharacterDetailsPage;
