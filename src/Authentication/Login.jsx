import "./Login.css";
function Login() {
  return (
    <div className="login-container">
      <div id="LoginChild01">

        <div className="LoginParent">
          
          <form id="LoginForm">
            <h1 id="LoginHeading">Login</h1>
            <input type="text" id="username" name="username" required placeholder="Username" />
            <input type="text" id="password" name="password" required placeholder="Password" />

            <div id="required">

              <div id="checkbtn">
                <input type="checkbox" id="rememberMe" name="rememberMe" required />
                <label htmlFor="rememberMe">Remember Me</label></div>

              <a href="forgot-password" id="forgotPasswordLink">Forgot Password?</a></div>


            <button type="submit" id="LoginBtn">Login</button>
            <span id="directRegis">Don't have an account ? <a href="#registration">Registration</a></span>

          </form>
        </div>




      </div>
      <div id="LoginChild02" > this is div02</div>

    </div>
  );
}
export default Login;