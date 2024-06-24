import { useState, useEffect, createContext } from "react";
import {Home} from '../pages/Home' 

import { Posts_Tools } from "../Fetchs/classes";

export let User_Context = createContext();

export const Filter = () => {
  const [user_In_Sesion, setUser] = useState({
    user: null,
    in_sesion: false,
    user_id: null,
    user_Info: null
  });
  let user_Sesion = localStorage.getItem("user_Sesion") ?? false;

  useEffect(() => {
    const find_User = async () => {
      if (user_Sesion != false) {
        let see_Data = new Posts_Tools();
        let data = await see_Data.post_The_Data();

        let find_User = data.find((users) => users.id == user_Sesion) ?? false;

        find_User
          ? setUser((state) => ({
              ...state,
              in_sesion: true,
              user: find_User.info.name,
              user_id: find_User.id,
              user_Info: find_User
            }))
          : setUser((state) => ({ ...state, in_sesion: false, user: null, user_id: null, user_Info: null }));
      }
    };
    find_User();
  }, [user_Sesion]);
  return (
    <>
      {user_In_Sesion.in_sesion ? (
        <User_Context.Provider value={{
            user_In_Sesion,
            
        }}>
          <Home />
        </User_Context.Provider>
      ) : (
        <h1>No hay user</h1>
      )}
    </>
  );
};
