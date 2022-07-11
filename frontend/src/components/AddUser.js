import React, { useState } from "react";
import axios from "axios";
import FormData from "./FormData";
const hobbiesEnum = require("../hobbiesEnum");


function AddUser() {
  const [hobbies, setHobbies] = useState(hobbiesEnum);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
  });

  function onFormChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function getcheckedHobbyIds() {
    return hobbies
      .filter(function (item) {
        return item.checked;
      })
      .map(function (item) {
        return item.id;
      });
  }

  function addUpdateser(e) {
    e.preventDefault();
    const data = {
      ...form,
      hobbies: getcheckedHobbyIds(),
    };
    axios
      .post("/user", data)
      .then(function (result) {
        document.getElementById("alertSuccess").classList.remove("d-none");
        setTimeout(function () {
          document.getElementById("alertSuccess").classList.add("d-none");
        }, 1500);
      })
      .catch(function (err) {
        document.getElementById("alertFailure").classList.remove("d-none");
        setTimeout(function () {
          document.getElementById("alertFailure").classList.add("d-none");
        }, 1500);
      });
  }

  function handleCheckBox(id) {
    const newEnum = hobbies.map(function (item, index) {
      return {
        ...item,
        checked: id === item.id ? !item.checked : item.checked,
      };
    });
    setHobbies(newEnum);
  }
  return (<FormData hobbies={hobbies} handleCheckBox={handleCheckBox}  addUpdateser={addUpdateser} onFormChange={onFormChange} form={form} />)
}

export default AddUser;
