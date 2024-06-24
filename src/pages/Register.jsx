import Inpts from "../components/Inpts";
import { useRef, useState } from "react";
import { Posts_Tools } from "../Fetchs/classes";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const go_To_Login = useNavigate()

  let [registered_User, set_Registered_User] = useState({
    user: null,
    info_To_User: "Registro",
    error: false,
  });

  const user_Inp = useRef();
  const email_Inp = useRef();
  const pass_Inp = useRef();

  //Modificar values de Inputs
  const [user_Inp_Modified, set_User_Value] = useState("");
  const [email_Inp_Modified, set_Email_Value] = useState("");
  const [pass_Inp_Modified, set_Pass_Value] = useState("");

  let Change_User_Inp_Value = (x) => {
    set_User_Value(x.target.value);
  };

  let Change_Email_Inp_Value = (x) => {
    set_Email_Value(x.target.value);
  };

  let Change_Pass_Inp_Value = (x) => {
    set_Pass_Value(x.target.value);
  };

  let register_Users = async (o) => {
    o.preventDefault();
    const see_Data = new Posts_Tools();

    const data = await see_Data.post_The_Data();

    let user_Value = user_Inp.current.value.trim();
    let email_Value = email_Inp.current.value.trim();
    let pass_Value = pass_Inp.current.value.trim();

    let find_User_Name =
      (await data.find((users) => users.info.name == user_Value)) ?? false;
    let find_User_Email =
      (await data.find((users) => users.info.email == email_Value)) ?? false;

    if (find_User_Name != false || find_User_Email != false) {
      set_Registered_User((userState) => ({
        ...userState,
        info_To_User: "Esos datos ya estan en uso",
      }));
    }

    if (
      user_Value != "" &&
      email_Value != "" &&
      pass_Value != "" &&
      find_User_Name == false &&
      find_User_Email == false
    ) {
      

      let new_User = new Posts_Tools(user_Value, email_Value, pass_Value);

      (await new_User.post_The_Data(new_User.data_For_Posts))
        ? set_Registered_User((userState) => ({
            ...userState,
            user: user_Value,
            info_To_User: "Has sido registrado " + user_Value,
          }))
        : set_Registered_User((userState) => ({
            ...userState,
            user: null,
            error: true,
            info_To_User: "Ocurrio un error al subir tu data!",
          }));

      set_Email_Value("");
      set_User_Value("");
      set_Pass_Value("");

      go_To_Login('/Login')
    }
  };

  return (
    <>
      <div id="register_Container">
        <h1>{registered_User.info_To_User}</h1>
      </div>

      <div id="register_Container">
        <form onSubmit={register_Users}>
          <label>User</label>
          <br />
          <Inpts
            type={"text"}
            placeholder={"User"}
            ref={user_Inp}
            value={user_Inp_Modified}
            Change_Value={Change_User_Inp_Value}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <Inpts
            type={"email"}
            placeholder={"Email"}
            ref={email_Inp}
            value={email_Inp_Modified}
            Change_Value={Change_Email_Inp_Value}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <Inpts
            type={"password"}
            placeholder={"Password"}
            ref={pass_Inp}
            value={pass_Inp_Modified}
            Change_Value={Change_Pass_Inp_Value}
          />
          <br />
          <br />
          <button type="submit">sing in</button>
        </form>
      </div>
    </>
  );
};

export default Register;
