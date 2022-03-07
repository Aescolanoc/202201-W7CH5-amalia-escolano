import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../services/api";
import { RelationButton } from "./relation-butoon";
import { checkToken } from "../helper/helper";

export function UserDetails() {
  const [userDetails, setUserDetails] = useState({});

  let pathName = window.location.pathname;
  pathName = pathName.split("/");
  let token = checkToken();

  useEffect(() => {
    if (token) {
      getUserDetails(pathName[2], token).then((resp) => {
        setUserDetails(resp.data);
      });
    }
  }, []);

  return (
    <>
      {token ? (
        <>
          <h3>Detalles de {userDetails.name}</h3>
          <div>
            <figure key={userDetails.id}>
              <img src={userDetails.image} alt="none" />
              <figcaption>{userDetails.Name}</figcaption>
            </figure>
          </div>
          <div>about: {userDetails.about}</div>

          <div>
            <RelationButton />
            <Link to="/users">
              <button>Ver listado de usuarios</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Debe iniciar sesion para ver el contenido</p>
      )}
    </>
  );
}
