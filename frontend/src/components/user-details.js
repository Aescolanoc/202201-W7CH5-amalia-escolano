import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../services/api";

export function UserDetails(user) {
  let pathname = window.location.pathname;
  pathname = pathname.split("/");
  let token = localStorage.getItem("token");
  token = JSON.parse(token);

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails(pathname[2]).then((resp) => {
      setUserDetails(resp.data);
    });
  }, []);

  return (
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
        <Link to="/users">
          <button>Volver al listado</button>
        </Link>
      </div>
    </>
  );
}
