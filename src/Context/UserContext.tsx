import { createContext } from "react";

export const UserContext = createContext({
  email: "",
  password: "",
  token: "",
});
