import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import ListBirthday from "../ListBirthday";
import AddBirthday from "../AddBirthday";
import BirthdayHome from "../BirthdayHome";
import CalendarView from "../CalendarView";
export default {
  title: "BirthdayPlugin"
};

const birthdays = [
  {
    name: "Jennifer Mackey",
    date: "December 11th"
  },
  {
    name: "John Doe",
    date: "January 1st"
  },

  {
    name: "April Full",
    date: "April 1st"
  }
];

export const birthdayHome = () => <BirthdayHome birthdayhome />;
export const loading = () => <ListBirthday loading />;
export const BirthdayList = () => <ListBirthday birthdays={birthdays} />;
export const Addbirthday = () => <AddBirthday add />;
export const calendarView = () => <CalendarView calendar />;
