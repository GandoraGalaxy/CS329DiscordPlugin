import React, { useState } from 'react';
import { Grid, Input, Divider, Button } from "semantic-ui-react";
import cake from "./images/cake.png"
const BirthdayHome = () => {
 



  return (
      <div>
           
          <img src={cake} height ="50px" /> Choose an option:<br></br>
          <Button>Add Birthday  </Button>
          <Button>List Birthdays</Button>
          <Button>Calendar View</Button>
    </div>
  );
}


export default BirthdayHome;