import Inpts from "../components/Inpts";
import { Posts_Tools } from "../Fetchs/classes";
import { useState, useRef } from "react";

const Login = () => {
  let [validate_State, set_Validate_State] = useState({
    user_Name: null,
    info_To_User: "Login",
  });

  let inp_User_Login = useRef();
  let inp_Pass_Login = useRef();

  const validate_User = async (x) => {
    x.preventDefault();

    const see_Data = new Posts_Tools();
    const data = await see_Data.post_The_Data(); 

    data ? (console.log('no hubo errores en el fetch')) : (set_Validate_State((state) => ({
      ...state,
      info_To_User: "Ocurrio un error verificando tu informacion",
    })))

    let user_Value = inp_User_Login.current.value.trim();
    let Pass_Value = inp_Pass_Login.current.value.trim();



    let find_User_Name =
      (await data.find((users) => users.info.name == user_Value)) ?? false;
    let find_User_Pass =
      (await data.find((users) => users.info.password == Pass_Value)) ?? false;

    if (
      user_Value != "" &&
      Pass_Value != "" &&
      find_User_Name != false &&
      find_User_Pass != false &&
      data != false
    ) {
      localStorage.setItem("user_Sesion", find_User_Name.id);
      set_Validate_State((state) => ({
          ...state,
          info_To_User: "Bienvenido " + user_Value,
        }));
    } else {
      if (user_Value == "" || Pass_Value == "") {
        set_Validate_State((state) => ({
          ...state,
          info_To_User: "Rellena los espacios en blanco",
        }));
      } else {
        if (find_User_Name == false || find_User_Pass == false) {
          set_Validate_State((state) => ({
            ...state,
            info_To_User: "Esos datos no fueron encontrados",
          }));
        }
      }
    }
  };

  return (
    <>
      <div id="form_L">
        <h1>{validate_State.info_To_User}</h1>
      </div>
      <div id="form_L">
        <form onSubmit={validate_User}>
          <label htmlFor="">User</label>
          <br />
          <Inpts type={"text"} placeholder={"User"} ref={inp_User_Login} />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <Inpts
            type={"password"}
            placeholder={"Password"}
            ref={inp_Pass_Login}
          />
          <br />
          <br />
          <button type="submit">log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
