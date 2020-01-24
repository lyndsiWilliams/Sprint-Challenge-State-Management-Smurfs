import React, { useState } from 'react';

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: Date.now()
  });
  console.log(newSmurf);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    console.log("handleSubmit", newSmurf);
    // Reset form once submitted
    setNewSmurf({
      name: '',
      age: '',
      height: '',
      id: Date.now()
    });
  };

  const handleChanges = e => {
    console.log("handleChanges");
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
  };

  return (
    <div className="smurf-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" onChange={handleChanges} value={newSmurf.name}/>
        <input type="text" name="age" placeholder="age" onChange={handleChanges} value={newSmurf.age}/>
        <input type="text" name="height" placeholder="height" onChange={handleChanges} value={newSmurf.height}/>
        <button type="submit">Create Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;