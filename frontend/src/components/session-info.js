import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function SessionInfo() {
  const userState = useSelector((state) => {
    return state.session;
  });

  return (
    <>
      <div>
        <h4>Bienvenid@ {userState.name}</h4>
        <Link to="/login">
          <button>Settings</button>
        </Link>
        <figure>
          <img src={userState.image} alt={userState.name} />
        </figure>
      </div>
    </>
  );
}
