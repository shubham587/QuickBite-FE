const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [usernameFocused, setUsernameFocused] = useState("");
    const [passwordFocused, setPasswordFocused] = useState("");
    const [locationFocused, setLocationFocused] = useState("");
  
    //   const navigate = useNavigate();
    const handleLogin = (event) => {
      event.preventDefault();
      // navigate("/quick-bite-application/home")
    };
  
    const handleUsernameFocus = () => {
      setUsernameFocused(true);
    };
    const handleUsernameBlur = () => {
      setUsernameFocused(false);
    };
    const handlePasswordFocus = () => {
      setPasswordFocused(true);
    };
    const handlePasswordBlur = () => {
      setPasswordFocused(false);
    };
    const handleLocationFocus = () => {
      setLocationFocused(true);
    };
    const handleLocationBlur = () => {
      setLocationFocused(false);
    };
  
    return (
      <div className="background">
        <div className="loginContainer">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="loginForm">
            <div className="formContainer">
              <label
                htmlFor="username"
                className={`username ${
                  usernameFocused || username ? "focused" : ""
                }`}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="password"
                className={`password ${
                  passwordFocused || password ? "focused" : ""
                } `}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ width: "100px" }}>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  className="location"
                >
                  <option value="" disabled>
                    Location
                  </option>
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
          {/* <Link to='/auth/signUp'>Sign Up</Link>  */}
        </div>
      </div>
    );
  };
  
  export default LoginPage;