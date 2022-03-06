import { useSelector } from "react-redux";

export function SessionInfo() {
  const userState = useSelector((state) => {
    return state.session;
  });

  return (
    <>
      <div>
        <p>Bienvenid@ {userState.name}</p>
      </div>
      <div>
        <figure>
          <img src={userState.image} alt={userState.name} />
        </figure>
      </div>
    </>
  );
}
