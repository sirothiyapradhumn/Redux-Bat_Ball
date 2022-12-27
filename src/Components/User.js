import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import { fetchUsers } from "../redux/userAction";
import { connect } from "react-redux";

function User({userData, fetchUserss}) {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // async function getdata() {
    //   try {
    //     let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     let data = res.data;
    //     setUsersData(data);
    //     setLoading(false);
    //   } catch (err) {
    //     // console.log(err);
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // }
    // getdata();

    fetchUserss();
  }, []);

  return (
    <>
      {userData.loading ? (
        <h1>Loading Data ......</h1>

      ) : userData.error !== "" ? (
        <h1>{userData.error}</h1>
      ) : (
        <ul>
          {userData.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}

const mapStateToProp = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    fetchUserss: ()=>dispatch(fetchUsers())
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(User);
