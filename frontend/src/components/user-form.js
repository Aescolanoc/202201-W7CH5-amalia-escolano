import { getUserDetails, register, updateUser } from "../services/api";
import * as actions from "../reducer/user/action-creator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function UserForm(user) {
  const [currentUser, setCurrentUser] = useState({});
  const userState = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();

  let pathname = window.location.pathname;
  pathname = pathname.split("/");

  useEffect(() => {
    if (pathname[2] === "update") {
      getUserDetails(pathname[3]).then((resp) => {
        setCurrentUser(resp.data);
      });
    }
  }, []);

  let newUser = {};
  let userModified = currentUser;

  function handleChange(ev) {
    if (pathname[2] === "update") {
      userModified = { ...userModified, [ev.target.name]: ev.target.value };
    } else {
      newUser = { ...newUser, [ev.target.name]: ev.target.value };
    }
  }

  function handleUpdate(event) {
    event.preventDefault();
    updateUser(userModified).then((resp) => {
      dispatch(actions.updateUser(resp.data));
    });
  }

  function handleClick(event) {
    event.preventDefault();
    register(newUser).then((resp) => {
      dispatch(actions.addUser(resp.data));
    });
  }
  console.log(currentUser.name);

  return (
    <>
      <p>Introduce aqui los datos:</p>
      <form action="">
        <div>
          <label htmlFor="name">
            Nombre:
            <input
              type="text"
              id="name"
              name="name"
              placeholder={currentUser.name ? currentUser.name : ""}
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
        <div>
          <label htmlFor="image">
            Foto:
            <input
              type="text"
              id="image"
              name="image"
              placeholder={currentUser.image ? currentUser.image : ""}
              onChange={(ev) => handleChange(ev)}
            ></input>
            {pathname[2] === "update" ? (
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
              placeholder={currentUser.about ? currentUser.about : ""}
              onChange={(ev) => handleChange(ev)}
            ></input>
            {pathname[2] === "update" ? (
              <button name="about" onClick={(ev) => handleUpdate(ev)}>
                actualizar
              </button>
            ) : (
              ""
            )}
          </label>
        </div>
        <div>
          {pathname[2] === "update" ? (
            ""
          ) : (
            <button type="submit" name="add" onClick={(ev) => handleClick(ev)}>
              Confirmar datos
            </button>
          )}
        </div>
      </form>

      <Link to={`/users/${currentUser._id}`}>
        {pathname[2] === "update" ? <button>Volver a detalles de {currentUser.name}</button> : ""}
      </Link>
      {currentUser.name ? (
        <Link to="/userslist">
          <button>Volver al listado</button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}