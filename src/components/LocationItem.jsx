import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LocationItem = ({ url }) => {

    const [personajes, setPersonajes] = useState({});
    useEffect(() => {
        axios.get(url)
            .then(res => setPersonajes(res.data))
    }, [])
    console.log(personajes)
    return (
        <div className='contenedorLocation'>

            <img src={personajes.image} alt="" />
            <div className="tex">
                <li> <h2>{personajes.name}</h2> </li>
                <li className='n1'> Status  </li>
                <li>{personajes.status}</li>
                <li className='n1'>Especie</li>
                <li> {personajes.species} </li>
                <li className='n1'>Genero</li>
                <li>  {personajes.gender} </li>

            </div>
        </div>
    );
};

export default LocationItem;