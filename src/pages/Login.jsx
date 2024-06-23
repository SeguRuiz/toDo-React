import Inpts from "../components/Inpts";

const Login = () => {
  return (
    <>
      <div id="form_L">
        <h1>Login</h1>
      </div>
      <div id="form_L">
        <form>
          <label htmlFor="">User</label>
          <br />
          <Inpts type={"text"} placeholder={"User"} />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <Inpts type={"password"} placeholder={"Password"} />
          <br />
          <br />
          <button type="submit">log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
