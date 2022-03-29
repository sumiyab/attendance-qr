import React, { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_NOT_API_KEY }).base(
  "app6Dk6VNBF2hNU9s"
);

const table = base("Attendence");
const createRecord = async (fields) => {
  const createRecord = await table.create([
    {
      fields: fields,
    },
  ]);
};
export const AttendaceReg = () => {
  const [name, setName] = useState();
  const [angi, setAngi] = useState();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name);
    // setSuccess(true);
    Swal.fire("Good job!", `${name} are successfully registered`, "success");
  };

  return (
    <div className="main-container">
      <h1>Attendance Register</h1>
      {!success && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          ></input>

          <select value={angi} onChange={(e) => setAngi(e.target.value)}>
            <option selected value="HOP1A">
              HOP1A
            </option>
            <option value="HOP1B">HOP1B</option>
            <option value="HOP1C">HOP1C</option>
          </select>

          <input
            type="submit"
            className="input"
            value="Submit"
            onClick={() => createRecord({ name, angi })}
          />
        </form>
      )}
    </div>
  );
};
