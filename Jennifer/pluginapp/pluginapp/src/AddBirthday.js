import React, { useState } from "react";
import { Grid, Input, Divider, Button } from "semantic-ui-react";
import cake from "./images/cake.png";
const AddBirthday = () => {
  return (
    <div>
      <img src={cake} height="40px" />
      Add a birthday for a user below
      <form>
        <Input
          icon="users"
          iconPosition="left"
          placeholder="Who is the user?"
        />
        <Input
          size="large"
          style={{ width: "300px" }}
          placeholder="What is the user's birthday?"
        />
        <Button primary>Submit</Button>
        <Button secondary>Cancel</Button>
      </form>
    </div>
  );
};

export default AddBirthday;
