import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const hobbies = require("./../hobbiesEnum");

function ViewUser(props) {
  const params = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    hobbies: [],
  });
  useEffect(() => {
    axios
      .get("/user/" + params.id)
      .then(function (result) {
        setUser({
          ...user,
          ...result.data,
        });
      })
      .catch(function () {
        
      });
      // eslint-disable-next-line
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Age : {user.age}</p>
        <p className="card-text">Email : {user.email}</p>
        <p className="card-text">Gender : {user.gender}</p>
        <div className="card-text">
          Hobbies :
          <ul>
            {user.hobbies.map((hobby, index) => {
              return <li key={index}>{hobbies[hobby - 1].value} </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
