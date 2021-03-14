import React, { useContext, useState } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/UserIdConnect";
import UpdateInfoProfil from "../components/Profil/UpdateInfoProfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import NavBar from '../components/PageAccueil/NavBar';
import Dropdown from '../components/PageAccueil/Dropdown';

const Profil = () => {
  const uid = useContext(UidContext);

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <NavBar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <div className="container">
      <div style={{paddingTop:'13%'}} >
        {uid ? (
          <UpdateInfoProfil />
        ) : (
          <div>
              <div className="row">
                <div className="col">
                  <Log signin={true} signup={false} />
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Profil;
