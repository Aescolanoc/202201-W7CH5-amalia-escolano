import { getUserDetails, register, updateUser } from "../services/api";
import * as actions from "../reducer/user/action-creator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../helper/helper";

export function UserForm(user) {
  const [currentUser, setCurrentUser] = useState({});
  const userState = useSelector((state) => {
    return state.session;
  });
  const dispatch = useDispatch();

  let pathName = window.location.pathname;
  pathName = pathName.split("/");
  let token = checkToken();

  useEffect(() => {
    if (pathName[3]) {
      if (pathName[1] === "update") {
        getUserDetails(pathName[3]).then((resp) => {
          setCurrentUser(resp.data);
        });
      }
    }
  }, []);

  let newUser = {};
  let userModified = currentUser;

  function handleChange(ev) {
    if (pathName[1] === "update") {
      userModified = { ...userModified, [ev.target.name]: ev.target.value };
    } else {
      newUser = { ...newUser, [ev.target.name]: ev.target.value };
    }
  }

  function handleUpdate(event) {
    event.preventDefault();
    updateUser(userModified, token).then((resp) => {
      dispatch(actions.updateUser(resp.data));
    });
    setCurrentUser(userModified);
  }

  function handleClick(event) {
    event.preventDefault();
    register(newUser).then((resp) => {
      dispatch(actions.addUser(resp.data));
    });
  }

  return (
    <>
      <p>Introduce aqui los datos:</p>
      <form action="">
        {pathName[1] === "update" ? (
          ""
        ) : (
          <>
            <div>
              <label htmlFor="name">
                Nombre:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={userState.name ? userState.name : ""}
                  maxLength="30"
                  onChange={(ev) => handleChange(ev)}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="passwd">
                Password:
                <input type="text" id="passwd" name="passwd" maxLength="30" onChange={(ev) => handleChange(ev)}></input>
              </label>
            </div>
          </>
        )}
        <div>
          <label htmlFor="image">
            Foto:
            <input
              type="text"
              id="image"
              name="image"
              placeholder={userState.image ? userState.image : ""}
              onChange={(ev) => handleChange(ev)}
            ></input>
            {pathName[1] === "update" ? (
              <button name="image" onClick={(ev) => handleUpdate(ev)}>
                actualizar
              </button>
            ) : (
              ""
            )}
          </label>
        </div>
        <div>
          <label htmlFor="about">
            About:
            <input
              type="text"
              id="about"
              name="about"
              placeholder={userState.about ? userState.about : ""}
              onChange={(ev) => handleChange(ev)}
            ></input>
            {pathName[1] === "update" ? (
              <button name="about" onClick={(ev) => handleUpdate(ev)}>
                actualizar
              </button>
            ) : (
              ""
            )}
          </label>
        </div>
        <div>
          {pathName[1] === "update" ? (
            ""
          ) : (
            <button type="submit" name="add" onClick={(ev) => handleClick(ev)}>
              Confirmar datos
            </button>
          )}
        </div>
      </form>

      <Link to={`/users/${userState.id}`}>
        {pathName[1] === "update" ? <button>Ver Detalles {userState.name}</button> : ""}
      </Link>
      {userState.name ? (
        <Link to="/userslist">
          <button>Volver al listado</button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
