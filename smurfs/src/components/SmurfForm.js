import React, { useState } from 'react';

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({});

  const onSubmit = event => {
    event.preventDefault();
    props.addSmurf(newSmurf);
  };

  const handleChanges = event => {
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
  };

  return (
    <div className="smurf-form">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="name" onChange={handleChanges} value={newSmurf.name}/>
        <input type="text" name="age" placeholder="age" onChange={handleChanges} value={newSmurf.age}/>
        <input type="text" name="height" placeholder="height" onChange={handleChanges} value={newSmurf.height}/>
        <button type="submit">Create Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;