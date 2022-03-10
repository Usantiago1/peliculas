import logo from './logo.svg';
import {card} from 'primereact/card';
import './App.css';
import { useState } from 'react';

import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './paginacion';

import Peliculasjson from './peliculas.json'

function App() {

  let peliculas = Peliculasjson;
  const [paginaActual, setPaginaActual] = useState(1);
  const [lstpeliculas, setLstPeliculas] = useState([]);
  const totalPorPagina = 7;

  const buscarPeliculas = async () =>{
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
    let respuesta = await fetch(url, {
      "method": "GET",
      "mode" : "no-cors",
      "headers" :{
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Origin" : "https://raw.githubusercontent.com/"
      }
    });
    let json = await respuesta.json();
    setLstPeliculas(json);
  }


  const cargarPeliculas =() =>{
    peliculas = peliculas.slice(
    (paginaActual - 1) * totalPorPagina,
    paginaActual * totalPorPagina
  );
  }

  

  const totalPaginas = ()=>{
    let cantidadTotalPeliculas = Peliculasjson.length;
    return Math.ceil(cantidadTotalPeliculas / totalPorPagina);
  }

  cargarPeliculas();

  return (
    <>
    <PageWrapper>

      {peliculas.map((pelicula)=>
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
          descripcion={pelicula.descripcion}>
      </Pelicula>
      )}

      <Paginacion
        pagina={paginaActual}
        total={totalPaginas()}
        onChangePagina={(e)=>{
          setPaginaActual(e);
        }}>

      </Paginacion>


     </PageWrapper>
    
    </>
  )
  }
export default App;
