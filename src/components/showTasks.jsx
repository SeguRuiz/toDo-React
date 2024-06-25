import { useContext, useEffect, useState } from "react";
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
      console.log(dataRender.newData);
      console.log(taskuser[0]);
    };

    seeData();
  }, [dataRender]);

  if (taskuser[0]) {
    return (
      <>
        <div id="taskFather">
          {taskuser.map((tasks, c) => (
            
              <div id="TaskContainer" key={tasks.id}>
                <div id="tasks">
                  <div id="Task_info">
                    <CheckBox id={tasks.id} />
                    <p key={c} className="task_text">{tasks.task} </p>
                  </div>
                  <div id="eliminate_Div">
                    <BtnEliminate id={tasks.id} />
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="taskFather2">
          <h1>No hay tareas</h1>
        </div>
      </>
    );
  }
};

export default ShowTasks;
