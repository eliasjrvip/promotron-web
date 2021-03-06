import React from 'react';
import { Link } from 'react-router-dom';
import Run from '../../../../assets/gifs/run.gif';

import '../styles.css';

const Home = () => {
  return (
    <div className="wrapper-welcome">
      <div className="banner-welcome">
        <img height="100%" src={Run} alt="trabalho-promoton" />
      </div>
      <div className="welcome-texts">
        <h2>Celeridade nos Processos</h2>
        <p>
          O robô das promotorias tem como missão ajudar o trabalho do Promotor, tornando sua atuação
          ainda mais célere e capaz de atingir o maior impacto possível.
        </p>
      </div>
      <div className="all-btns">
        <div className="div-main-previous">
          <Link to="./work">
            <button type="button" className="btn-previous">
              anterior
            </button>
          </Link>
        </div>
        <div className="btns">
          <Link to="./perfomanceAnalysis">
            <button type="button" className="btn-next">
              próximo
            </button>
          </Link>
          <Link to="./dashboard">
            <button type="button" className="btn-jumper">
              pular
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
