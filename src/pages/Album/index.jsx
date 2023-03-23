import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

import GoBack from "../../components/GoBack";
import Photo from "../../components/Photo";
import './index.css'

export default function AlbumPage() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [album, setAlbum] = useState([]);

  useEffect(() => {
    api
      .get('/albums/' + id + '/photos')
      .then((response) => setAlbum(response.data))
      .catch((error) => {
        console.error("Errro:" + error);
      })
  }, []);

  function goPhoto(idPhoto) {
    navigate('/photo/' + idPhoto)

  }



  return (
    <>
      <GoBack />
      <div className="content">
        {
          album.map((album) =>
            <Photo
              key={album.id}
              thumbnailUrl={album.thumbnailUrl}
              onClick={() => (goPhoto(album.id))}
            />
          )
        }
      </div>
    </>
  )
}