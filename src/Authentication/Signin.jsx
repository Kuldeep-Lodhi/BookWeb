import "./Signin.css";
function Signin() {
  return (
    <div className="sigin-container">
      <div id="SiginChild01">

        <div className="SiginParent">
          
          <form id="SiginForm" onSubmit={handleSubmit}>
            <h1 id="SiginHeading">Sigin</h1>
            <input type="text" id="firstname" name="firstname" required placeholder="firstname" />
            <input type="text" id="lastname" name="lastname" required placeholder="lastrname" />
            <input type="text" id="password" name="password" required placeholder="Password" />
            <input type="text" id="email" name="email" required placeholder="Email" />

            <div id="requiredSig">

              <div id="checkbtn">
                <input type="checkbox" id="rememberMe" name="rememberMe" required />
                <label htmlFor="rememberMe"><pre id="signText">i follow all the rules and regulations<br/> of this website
                    with all my heart.
                    </pre></label></div>

              {/* <a href="forgot-password" id="forgotPasswordLink">Forgot Password?</a> */}
              </div>


            <button type="submit" id="siginBtn">New User</button>
            <span id="directLogin">Do you have an account  <a href="#LoginChild01">Login</a></span>

          </form>
        </div>




      </div>
      <div id="LoginChild02" > this is div02</div>

    </div>
  );
}
export default Signin;