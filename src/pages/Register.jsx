import Inpts from "../components/Inpts";

const Register = () => {
  return (
    <>
      <div id="register_Container">
        <h1>Register</h1>
      </div>

      <div id="register_Container">
        <form>
          <label htmlFor="">User</label>
          <br />
          <Inpts type={"text"} placeholder={"User"} />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <Inpts type={"email"} placeholder={"Email"} />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <Inpts type={"password"} placeholder={"Password"} />
          <br />
          <br />
          <button type="submit">sing in</button>
        </form>
      </div>
    </>
  );
};

export default Register;
