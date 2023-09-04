import style from "./Error.module.css";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className={style["error-container"]}>
      <h1>❌ Something Went Wrong ❌</h1>
      <h2>{err.data}</h2>
      <h3>{err.status + " " + err.statusText} 🥲</h3>
    </div>
  );
};

export default Error;
