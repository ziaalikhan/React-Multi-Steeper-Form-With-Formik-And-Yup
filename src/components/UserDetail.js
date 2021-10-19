
import React from 'react'

function UserDetail() {
    const fName = localStorage.getItem("firstName");
    const LName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const profession = localStorage.getItem("profession");
    const city = localStorage.getItem("city");
    const bio = localStorage.getItem("bio");

    return (
        <div>
            <h2>Personal Detail</h2>
        <table>
     
        <tr>
          <td>First Name</td>
          <td>{fName}</td>
        </tr>
        <tr>
        <td>Last Name</td>
          <td>{LName}</td>
        </tr>
        <tr>
        <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
        <td>Profession</td>
          <td>{profession}</td>
        </tr>
        <tr>
        <td>City</td>
          <td>{city}</td>
        </tr>
        <tr>
        <td>Bio</td>
          <td>{bio}</td>
        </tr>
      
      </table>
      </div>
    )
}

export default UserDetail
