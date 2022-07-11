import { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "./UserDetail";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/users")
      .then(function (result) {
        setUsers(result.data);
      })
      .catch(function () {});
  }, []);

  function deleteUser(id) {
    axios
      .delete(`/user/${id}`)
      .then(function () {
        const newList = users.filter((user) => {
          return id !== user._id;
        });
        setUsers(newList);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <section>
      {users.length > 0 && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, ind) => {
                return (
                  <UserDetail deleteUser={deleteUser} key={ind} data={user} />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
