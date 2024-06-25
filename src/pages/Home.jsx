import Inpts from "../components/Inpts";
import { User_Context } from "./Filter";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Put_Tools, Posts_Tools } from "../Fetchs/classes";
import uuid from "react-uuid";
import ShowTasks from "../components/showTasks";


export const Data_Context = createContext()

export const Home = () => {
  let user_Data = useContext(User_Context);
 
  const [newData, setData] = useState(null);
  
  let add_Tasks_Inp = useRef();
  let [Change_Inp, setinp_Add] = useState('')

  let Change_Add_Inp_Value = (x) => {
    setinp_Add(x.target.value);
  };


  const submit_Tasks = async (x) => {
    x.preventDefault();
    
    let see_Data = new Posts_Tools();
    let data = await see_Data.post_The_Data();

    let Find_user =
      (await data.find(
        (users) => users.id == user_Data.user_In_Sesion.user_id
      )) ?? false;

    let inpt_Task_Value = add_Tasks_Inp.current.value.trim();

    if (inpt_Task_Value != "" && Find_user != false) {
      let id = uuid();
      let task = {
        task: inpt_Task_Value,
        id: id,
        state: false
      };

      Find_user.tasks.push(task);
      

      let new_Task_Modification = new Put_Tools(Find_user);

      new_Task_Modification.put_The_Data(
        Find_user.id,
        new_Task_Modification.data_For_Puts
      );
      
      let dataUpdated = await data.find(
        (users) => users.id == user_Data.user_In_Sesion.user_id
      ) ?? false;

      
      //Bombillo
      setData(dataUpdated) 
      
      setinp_Add('')
    }
    }  
  ;

 
  return (
    <>
      <h1>{"Bienvenido " + user_Data.user_In_Sesion.user}</h1>
      <br />
      <form onSubmit={submit_Tasks}>
        <label>Add tasks</label>
        <br />
        <Inpts
          placeholder={"write ur task"}
          type={"text"}
          ref={add_Tasks_Inp}
          value={Change_Inp}
          Change_Value={Change_Add_Inp_Value}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      <br />
      <Data_Context.Provider value={{
        newData,
        setData,
        Change_Inp
      }}>
       <ShowTasks data={newData}/>
      </Data_Context.Provider>
    </>
  );
};


