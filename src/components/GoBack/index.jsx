import React from "react";
import { useNavigate } from "react-router-dom";

import './index.css'

export default function GoBack() {

  const navigate = useNavigate();


  function goBackPage() {
    history.goBack();
  }

  return (
    <button className="bttn-back" onClick={() => navigate(-1)}>
      Voltar
    </button>
  )
}