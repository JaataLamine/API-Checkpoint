import { useEffect, useState } from "react";
import axios from "axios";

// Component that fetch data from api and display it
const UserList = () => {
  // Defining our two states
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);

  // Hooks for getting list of users from api
  // And setting it in our states
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUser(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {error && <p>{error}</p>}
      {listOfUser.map((user) => (
        <div className="col" key={user.id}>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <span className="libele">Name:</span> {user.name}
              </p>
              <p className="card-text">
                <span className="libele">User name:</span> {user.username}
              </p>
              <p className="card-text">
                <span className="libele">Email:</span> {user.email}
              </p>
              <p className="card-text">
                <span className="libele">Address:</span> {user.address.street},{" "}
                {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode}
              </p>
              <p className="card-text">
                <span className="libele">Phone number:</span> {user.phone}
              </p>
              <p className="card-text">
                <span className="libele">Web site:</span> {user.website}
              </p>
              <p className="card-text">
                <span className="libele">Compony:</span> {user.company.name},{" "}
                {user.company.catchPhrase}, {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
