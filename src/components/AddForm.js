import React, { forwardRef, useEffect } from "react";
import { useState } from "react";

const addForm = {
  name: "",
  position: "",
  nationality: "",
  email: "",
};

function AddForm(props) {
  const [formMembers, setFormMembers] = useState(addForm);
  const [isEditing, setisEditing] = useState(false);

  useEffect(() => {
    console.log("Düzenlendi");
    props.editMode ? setFormMembers(props.editMode) : setFormMembers(addForm);
    props.editMode ? setisEditing(true) : setisEditing(false);
  }, [props.editMode]);

  function submitHandler(e) {
    e.preventDefault();
    props.addMember(formMembers);
    setisEditing(false);
    setFormMembers(addForm);
  }

  const changeHandler = (e) => {
    console.log(e.target.value);
    const newFormMembers = {
      ...formMembers,
      [e.target.name]: e.target.value,
    };
    setFormMembers(newFormMembers);
  };

  return (
    <div>
      {isEditing ? <h2>Edit Member</h2> : <h2>Add New Member</h2>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            name="name"
            value={formMembers.name}
          />
        </div>
        <label>
          Position:
          <input
            type="radio"
            id="Guard"
            name="position"
            value={"Guard"}
            onChange={(e) => changeHandler(e)}
            checked={formMembers.position === "Guard"}
          />
          <label htmlFor="guard">Guard</label>
          <input
            type="radio"
            id="Forward"
            name="position"
            value="Forward"
            onChange={(e) => changeHandler(e)}
            checked={formMembers.position === "Forward"}
          />
          <label htmlFor="forward">Forward</label>
          <input
            type="radio"
            id="Center"
            name="position"
            value="Center"
            onChange={(e) => changeHandler(e)}
            checked={formMembers.position === "Center"}
          />
          <label htmlFor="center">Center</label>
        </label>

        <div>
          <label htmlFor="nationality">Nationality: </label>
          <select
            onChange={(e) => changeHandler(e)}
            type="text"
            name="nationality"
            value={formMembers.nationality}
          >
            <option value="USA">USA</option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Greece">Greece</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="email"
            name="email"
            value={formMembers.email}
          />
        </div>
        <div>
          <button>Add Member</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
