import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddForm from "./components/AddForm";

function App() {
  const [editingMember, setEditingMember] = useState();
  const [editingOrder, setEditingOrder] = useState();
  const [basMembers, setBasMembers] = useState([
    {
      name: "Elijah Bryant",
      position: "Guard",
      nationality: "USA",
      email: "elijah@ran.com",
    },
    {
      name: "Furkan Haltalı",
      position: "Center",
      nationality: "Turkey",
      email: "furkan@ran.com",
    },
    {
      name: "Giannis Antetokounmpo",
      position: "Forward",
      nationality: "Greece",
      email: "elijah@ran.com",
    },
  ]);

  function addMember(newMember) {
    console.log("editingOrder", editingOrder);
    if (editingOrder !== undefined) {
      const updatedMembers = [...basMembers];
      updatedMembers.splice(editingOrder, 1, newMember);
      setBasMembers(updatedMembers);
    } else {
      setBasMembers([...basMembers, newMember]);
    }
    setEditingOrder();
  }

  function editHelper(memberData, order) {
    setEditingMember(memberData);
    setEditingOrder(order);
  }

  return (
    <div className="App">
      <ul>
        {basMembers.map((member, i) => {
          return (
            <li key={i}>
              <a className="App-link" href={`emailto:${member.email}`}>
                {member.name} - {member.position} - {member.nationality}
              </a>
              <button
                className="edit-button"
                onClick={() => editHelper(member, i)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
      <AddForm addMember={addMember} editMode={editingMember} />
    </div>
  );
}

export default App;
