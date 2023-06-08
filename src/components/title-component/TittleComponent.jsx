import React from "react";
import '../title-component/Title.css'
import pokeLogo from "../../assets/images/pokemon.svg";


export function TittleComponent () {
    return (
        <header>
          <div className="containerTitle">
            <img src={pokeLogo} alt="Pokemon Logo" className="imageLogo" />
          </div>
        </header>
      );
    }

export default TittleComponent ;