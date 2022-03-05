import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../reducer/user/action-creator";
import { getAllUsers } from "../services/api";
import { Link } from "react-router-dom";

export function UsersList() {
  const [currentUser, setCurrentUser] = useState([]);
  const userState = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const users = useEffect(() => {
    getAllUsers().then((resp) => {
      console.log(resp);
      dispatch(actions.loadUsers(resp.data));
      setCurrentUser(resp.data);
    });
  }, []);

  // function handleDelete(id) {
  //   removeUser(id).then((resp) => {
  //     dispatch(actions.removeUser(resp.data));
  //   });
  // }
  console.log(currentUser);
  console.log(userState);
  return (
    <div>
      {userState.length ? (
        <div>
          <header>
            <h1> USERS LIST </h1>
          </header>
          <Link to="/register">
            <button>Añadir nuevo user</button>
          </Link>
          {userState.map((item, index) => (
            <div key={item._id}>
              <Link to={{ pathname: `/users/${item._id}` }}>
                <>
                  <figure>
                    <img src={item.image} alt={item.name} />
                    <figcaption>{item.name}</figcaption>
                  </figure>
                </>
              </Link>
              {/* <button value={item._id} onClick={(ev) => handleDelete(ev.target.value)}>
                delete
              </button> */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
