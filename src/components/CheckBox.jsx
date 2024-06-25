import { useEffect, useRef, useState } from "react";
import { Posts_Tools } from "../Fetchs/classes";
import { Put_Tools } from "../Fetchs/classes";
const CheckBox = ({ id }) => {
  const check_Ref = useRef();
  const [change, setChange] = useState(true);

  const upload_State = async () => {
    let id_User = localStorage.getItem("user_Sesion");
    const data = new Posts_Tools();
    const see_Data = await data.post_The_Data();

    let find_User =
      (await see_Data.find((users) => users.id == id_User)) ?? false;

    if (check_Ref.current.checked) {
      let copy_User = { ...find_User };

      copy_User.tasks.forEach((e) => {
        if (e.id == check_Ref.current.id) {
          e.state = true;
        }
      });

      let updated_Data = new Put_Tools(copy_User);

      updated_Data.put_The_Data(find_User.id, updated_Data.data_For_Puts);

      setChange(1);
    } else {
      let copy_User = { ...find_User };

      copy_User.tasks.forEach((e) => {
        if (e.id == check_Ref.current.id) {
          e.state = false;
        }
      });

      let updated_Data = new Put_Tools(copy_User);

      updated_Data.put_The_Data(find_User.id, updated_Data.data_For_Puts);

      setChange(0);
    }
  };

  useEffect(() => {
    const show_State = async () => {
      let id_User = localStorage.getItem("user_Sesion");
      const data = new Posts_Tools();
      const see_Data = await data.post_The_Data();

      let find_User =
        (await see_Data.find((users) => users.id == id_User)) ?? false;

      find_User.tasks.forEach((e) => {
        if (check_Ref.current.id == e.id) {
          check_Ref.current.checked = e.state;
        }
      });
    }
    show_State()
  }, [change]);

  return (
    <input type="checkbox" id={id} ref={check_Ref} onClick={upload_State} />
  );
};

export default CheckBox;
