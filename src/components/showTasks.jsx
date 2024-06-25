import {  useContext, useEffect, useState } from "react";
import { Data_Context } from "../pages/Home";
import { Posts_Tools } from "../Fetchs/classes";
import BtnEliminate from "./BtnEliminate";
import CheckBox from "./CheckBox";

const ShowTasks = () => {
  //contexto del home al subir tareas los utilizo ya que el cambia cuando se sube una tarea
  const dataRender = useContext(Data_Context);
  
  const [taskuser, setTask] = useState([]);
  //Array vacio al estado para que no lea un indefinido a lo task
  

  useEffect(() => {
    const seeData = async () => {
      let id_User = localStorage.getItem("user_Sesion");
      const data = new Posts_Tools();
      const see_Data = await data.post_The_Data();

      let find_User = await see_Data.find((users) => users.id == id_User);

      setTask(find_User.tasks);
    };

    seeData();
  }, [dataRender]);
  
  return (
    <>
      <div id="taskFather">
        {taskuser.map((tasks, c) => (
          <>
            <div id="TaskContainer">
            <CheckBox id={tasks.id}/>
            <p key={c}>{tasks.task}</p>
            <BtnEliminate id={tasks.id}/>
            </div>
          </>
        ))}
      </div>

    </>
  );

}

export default ShowTasks
