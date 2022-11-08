import axios from 'axios';
import LocationItem from './components/LocationItem';
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [locations, setLocations] = useState({});
  const [typeId, setType] = useState("");



  useEffect(() => {

    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocations(res.data))

  }, [])



  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => setLocations(res.data));
  }


  return (
    <div className="App">

      <div className="boton">
        <input type="text" value={typeId} onChange={e => setType(e.target.value)} />
        <button onClick={searchLocation}>Search</button>
      </div>
      <br />
      <div className="informacionPlaneta">
        <h2> Nombre: {locations.name} </h2>
        <h2>Tipo: {locations.type} </h2>
        <h2> Dimension: {locations.dimension} </h2>
        <h2> Poblacion: {locations.residents?.length} </h2>
      </div>
      <ul>
        <h2 className="contenedor"> {locations.residents?.map(personaje => (
          <div className="contenedor-concierto">
            <LocationItem
              url={personaje}
              key={personaje}
            />


          </div>

        ))} </h2>
      </ul>

    </div>
  )
}

export default App
