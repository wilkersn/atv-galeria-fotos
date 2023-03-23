import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import AlbumButton from "../../components/AlbumButton";

import './index.css';

export default function Gallery() {
  const navigate = useNavigate()
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api
      .get('/albums')
      .then((response) => setAlbums(response.data))
      .catch((error) => {
        console.error("Errro:" + error);
      })
  }, []);

  function goAlbum(id) {
    navigate('/album/' + id)
    console.log(id);
  }

  return (
    <div>
      <div className="Content-Albums">
        {
          albums.map((album) =>
            <AlbumButton
              key={album.id}
              title={album.title}
              onClick={() => (goAlbum(album.id))}
            />
          )
        }
      </div>
    </div>
  )
}