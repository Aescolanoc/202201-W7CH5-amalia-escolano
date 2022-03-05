import { useEffect, useState } from "react";
import { login, getAllUsers } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../reducer/user/action-creator";
import { Link } from "react-router-dom";

export function UserAuth() {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    passwd: "",
  });
  let user = {};

  function handleChange(ev) {
    user = { ...user, [ev.target.name]: ev.target.value };
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.target.name === "login") {
      login(user).then((resp) => {
        dispatch(actions.login({ ...resp.data, isLogged: true }));
        setCurrentUser(resp.data);
        localStorage.setItem("token", JSON.stringify(resp.data.token));
      });
    } else {
      localStorage.removeItem("token");
      dispatch(actions.logout());
      setCurrentUser({});
    }
  }

  return (
    <div>
      {currentUser.token ? <p>Bienvenid@ {currentUser.userName}</p> : <p>Introduzca sus datos</p>}
      <form>
        <label htmlFor="name">
          Nombre:
          <input type="text" id="name" name="name" value={user.name} onChange={(ev) => handleChange(ev)}></input>
        </label>
        <label htmlFor="passwd">
          Password:
          <input
            type="password"
            id="passwd"
            name="passwd"
            value={user.passwd}
            onChange={(ev) => handleChange(ev)}
          ></input>
        </label>
        {currentUser.token ? (
          <button type="submit" name="logout" onClick={(ev) => handleClick(ev)}>
            Cerrar sesion
          </button>
        ) : (
          <button type="submit" name="login" onClick={(ev) => handleClick(ev)}>
            Iniciar sesion
          </button>
        )}

        {currentUser.token ? (
          <Link to="/update">
            <div>
              <button>Modifica tu perfil</button>
            </div>
          </Link>
        ) : (
          <Link to="/register">
            <div>
              <button>Regístrate aquí</button>
            </div>
          </Link>
        )}
      </form>
    </div>
  );
}