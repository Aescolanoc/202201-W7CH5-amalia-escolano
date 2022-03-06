import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../reducer/user/action-creator";
import { getAllUsers } from "../services/api";
import { Link } from "react-router-dom";

export function UsersList() {
  const usersList = useSelector((state) => {
    return state.user;
  });
  const userState = useSelector((state) => {
    return state.session;
  });
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");
  token = JSON.parse(token);

  useEffect(() => {
    getAllUsers(token).then((resp) => {
      dispatch(actions.loadUsers(resp.data));
    });
  }, []);

  return (
    <div>
      <h3>Lista de usuarios</h3>
      {usersList.length ? (
        <div>
          {usersList.map((item, index) => (
            <div key={item._id}>
              <Link to={{ pathname: `/users/${item._id}` }}>
                {userState.id === item._id ? (
                  ""
                ) : (
                  <>
                    <figure>
                      <img src={item.image} alt={item.name} />
                      <figcaption>{item.name}</figcaption>
                    </figure>
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Debe iniciar sesión para poder ver el contenido</p>
      )}
    </div>
  );
}
