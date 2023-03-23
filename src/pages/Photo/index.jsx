import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

import './index.css'

import GoBack from "../../components/GoBack";

export default function PhotoPage() {
  const { id } = useParams();


  const [album, setAlbum] = useState([]);

  useEffect(() => {

    api
      .get('/photos/' + id)
      .then((response) => setAlbum(response.data))
      .catch((error) => {
        console.error("Errro:" + error);
      })
  }, []);



  return (
    <div>
      <GoBack />
      {album.title}
      <img className="photo" src={album.url} alt="photo"
      />
    </div>
  )
}