import { login } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../reducer/session/action-creator";
import { Link } from "react-router-dom";

export function UserAuth() {
  const userState = useSelector((state) => {
    return state.session;
  });
  const dispatch = useDispatch();
  let user = {};

  function handleChange(ev) {
    user = { ...user, [ev.target.name]: ev.target.value };
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.target.name === "login") {
      login(user).then((resp) => {
        dispatch(actions.login({ ...resp.data, isLogged: true }));
        localStorage.setItem("token", JSON.stringify(resp.data.token));
      });
    } else {
      localStorage.removeItem("token");
      dispatch(actions.logout());
      user = {};
    }
  }

  return (
    <div>
      {userState.isLogged ? "" : <p>Introduzca sus datos</p>}
      <form>
        {userState.isLogged ? (
          ""
        ) : (
          <>
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
          </>
        )}
        {userState.isLogged ? (
          <button type="submit" name="logout" onClick={(ev) => handleClick(ev)}>
            Cerrar sesion
          </button>
        ) : (
          <button type="submit" name="login" onClick={(ev) => handleClick(ev)}>
            Iniciar sesion
          </button>
        )}

        {userState.isLogged ? (
          <>
            <Link to="/update" user={userState.name}>
              <div>
                <button>Modificar perfil</button>
              </div>
            </Link>
            <Link to="/users">
              <button>Ver listado de usuarios</button>
            </Link>
          </>
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
