import { useState } from "react";
import "../styles/login.css"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [usernameFocused, setUsernameFocused] = useState("");
    const [passwordFocused, setPasswordFocused] = useState("");
    return (
    <div className="background">
    <div className={"relative w-[400px] mx-auto top-[20%]"}>
      <h2 className="w-[384px]">Login</h2>
      <form className="w-[384px]">
        <div className="mb-2.5">
          <label
            htmlFor="username"
            className={`username ${usernameFocused||username ? "focused" : ""}`}
            
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            // onFocus={handleUsernameFocus}
            // onBlur={handleUsernameBlur}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" className={`password ${passwordFocused||password ? "focused" : ""} `}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            // onFocus={handlePasswordFocus}
            // onBlur={handlePasswordBlur}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{width:"100px"}}>
          <select onChange={(e) => setLocation(e.target.value)} value={location} className="location">
            <option value="" disabled>Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Banglore">Banglore</option>
            <option value="Baroda">Baroda</option>
            <option value="Pune">Pune</option>
          </select>
          </div>
        </div>
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
    </div>
    )
}

export default LoginPage