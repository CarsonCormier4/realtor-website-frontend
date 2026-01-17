import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      (userType === "admin" && email === "admin@a12.com" && password === "admin123") ||
      (userType === "user" && email === "user@example.com" && password === "userpass123")
    ) {
      alert(`${userType} login successful`);
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;