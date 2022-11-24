import React, { useState } from 'react';
import './App.css';
import CronometroIMG from './Image/cronometro.png';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;


function Cronometro() {

  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('COMEÇAR');
  const [ultimo, setUltimo] = useState(null)

  function comecar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;

      setBotao('COMEÇAR');
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10 ? '0' + mm : mm) + ':'
          + (ss < 10 ? '0' + ss : ss);

        setNumero(format);
      }, 1000);

      setBotao('PARAR');
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    setUltimo(numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('COMEÇAR');
  }



  return (
    
    <div className='container'>
      <p className='tempo'>{numero}</p>

      <div className='area'>
        <button className='button' onClick={comecar}>
          {botao}
        </button>
        <button className='button' onClick={limpar}>
          LIMPAR
        </button>
      </div>
      <div className='ultima'>
        <h2>Historico</h2>
        <p>{ ultimo ? 'Ultimo tempo: ' + ultimo: '' }</p>
      </div>

    </div>

  )

}

export default Cronometro
