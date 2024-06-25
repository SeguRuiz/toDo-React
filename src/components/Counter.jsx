import { useEffect, useContext, useState } from "react";
import { Data_Context } from "../pages/Home";
import { Posts_Tools } from "../Fetchs/classes";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const dataRender = useContext(Data_Context);

  useEffect(() => {
    const update_Counter = async () => {
      let id_User = localStorage.getItem("user_Sesion");
      const data = new Posts_Tools();
      const see_Data = await data.post_The_Data();

      let find_User =
        (await see_Data.find((users) => users.id == id_User)) ?? false;

      console.log(find_User);

      let filtered = await find_User.tasks.filter(
        (tasks) => tasks.state != false
      );

      console.log(filtered.length);

      setCounter(filtered.length);
    };
    update_Counter();

    
  }, [dataRender]);
  return (
    <>
      <h2>{counter}</h2>
    </>
  );
};

export default Counter;
