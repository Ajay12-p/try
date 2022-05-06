import React from "react";
import { useState } from "react";
import axios from "axios";

const Nav = () => {
  // console.log("hi there");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(name)
  const handlesubmit = (e) => {
    e.preventDefault();

    const { data } = axios
      .post(`http://localhost:8000/api/ragister`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(data);
  };

  return (
    <form onSubmit={handlesubmit}>
        <div className="row">
          <div className="col md-3">
      
            <div className="form-group">
              <label>name</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="xyx..."
              />
          
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
              className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" eg : stryhnbsg"
              />
              </div>
              <button on onClick={handlesubmit}>
                submit
              </button>
              </div>
            </div>
          </div>
        
      
    </form>
  );
};
export default Nav;
