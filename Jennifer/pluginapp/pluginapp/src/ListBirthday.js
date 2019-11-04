import React, { useState } from "react";
import { Container, Divider } from "semantic-ui-react";
import cake from "./images/cake.png";

const ListBirthday = ({ birthdays = [], loading }) => {
  const [getBirthdays, setBirthdays] = useState(birthdays);

  if (loading) {
    return (
      <div>
        <img src={cake} height="50px" /> <br></br>Please wait, Loading...{" "}
      </div>
    );
  }

  return (
    <div>
      <h1>Current list of birthdays:</h1>
      <Divider />
      {birthdays.map(birthdays => (
        <div>
          <h4 style={{ fontWeight: "bold" }}>{birthdays.name}</h4>
          <div>{birthdays.date}</div>
        </div>
      ))}

      {birthdays.length === 0 && (
        <div style={{ fontWeight: "bold" }}>
          <br></br>There are no current birthdays to list!
        </div>
      )}
    </div>
  );
};

export default ListBirthday;
