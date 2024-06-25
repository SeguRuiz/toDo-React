import { useContext } from "react";
import { Data_Context } from "../pages/Home";
import { Posts_Tools, Put_Tools } from "../Fetchs/classes";

const BtnEliminate = ({ id, key }) => {

  let renderData = useContext(Data_Context);

  const Eliminate_Data = async () => {
  
    let id_User = localStorage.getItem("user_Sesion");
    const data = new Posts_Tools();
    const see_Data = await data.post_The_Data();

    let find_User =
      (await see_Data.find((users) => users.id == id_User)) ?? false;

    let tasks_Filtered = find_User.tasks.filter((tasks) => tasks.id != id);

    let user = { ...find_User };

    user.tasks = tasks_Filtered;
    
    let New_User_Updated = new Put_Tools(user);

    New_User_Updated.put_The_Data(find_User.id, New_User_Updated.data_For_Puts);
    //Bombillo
    renderData.setData(find_User);
  };

  return (
    <button id={id} onClick={Eliminate_Data} key={key}>
      Eliminar
    </button>
  );
};

export default BtnEliminate;
