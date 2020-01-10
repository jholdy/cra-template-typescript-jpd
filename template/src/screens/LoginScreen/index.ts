import React from "react";
import { useDispatch } from "react-redux";

import { Creators } from "../../store/ducks/login";

export default function LoginScreen() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Creators.getRequest({ nome: "teste teste" }));
  }, []);

  return <h1>Login</h1>;
}
