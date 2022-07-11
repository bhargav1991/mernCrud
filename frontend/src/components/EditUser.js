import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import FormData from "./FormData";
const hobbiesEnum = require("../hobbiesEnum");

function EditUser(props) {
  const params = useParams();
  const [hobbies, setHobbies] = useState(hobbiesEnum);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
  });

  useEffect(() => {
    axios
      .get("/user/" + params.id)
      .then(function (result) {
        setExistingHobbies(result.data.hobbies);
        setForm(result.data);
      })
      .catch(function (err) {
        console.log(err);
      });
      // eslint-disable-next-line
  }, []);

  function setExistingHobbies(arr = []) {
    const modified = hobbies.map((item) => {
      return {
        ...item,
        checked: arr.includes(item.id) ? true : item.checked,
      };
    });
    setHobbies(modified);
  }

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
      .put("/user/" + params.id, data)
      .then(function (result) {
        document.getElementById("alertSuccess").classList.remove("d-none");
        setTimeout(function () {
          document.getElementById("alertSuccess").classList.add("d-none");
        }, 3000);
      })
      .catch(function (err) {
        document.getElementById("alertFailure").classList.remove("d-none");
        setTimeout(function () {
          document.getElementById("alertFailure").classList.add("d-none");
        }, 3000);
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
  return (<FormData hobbies={hobbies} handleCheckBox={handleCheckBox} addUpdateser={addUpdateser} onFormChange={onFormChange} form={form} />)
}

export default EditUser;
