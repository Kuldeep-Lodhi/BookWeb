import { useState } from "react";
import "./Signin.css";

function Signin() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    // Check if user already exists
    const res = await fetch(`http://localhost:3001/users?email=${formData.email}`);
    const users = await res.json();

    if (users.length > 0) {
      alert("User already exists with this email");
      return;
    }

    // Register new user
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("User registered successfully!");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      rememberMe: false
    });
  };

  return (
    <div className="sigin-container">
      <div id="SiginChild01">
        <div className="SiginParent">
          <form id="SiginForm" onSubmit={handleSubmit}>
            <h1 id="SiginHeading">Signin</h1>

            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              placeholder="Lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <div id="requiredSig">
              <div id="checkbtn">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="rememberMe">
                  <pre id="signText">
                    I follow all the rules and regulations<br />
                    of this website with all my heart.
                  </pre>
                </label>
              </div>
            </div>

            <button type="submit" id="siginBtn" >New User</button>
            <span id="directLogin">Do you have an account? <a href="#LoginChild01"> Login</a></span>
          </form>
        </div>
      </div>

      <div id="LoginChild02">this is div02</div>
    </div>
  );
}

export default Signin;
