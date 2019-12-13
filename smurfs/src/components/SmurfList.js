import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getSmurfs, addSmurf } from '../actions/smurfActions';

// Component
import SmurfForm from './SmurfForm';


const SmurfList = props => {

  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };


  return (
    <div>
      <div>
        {props.smurf.map(smurf => (
          <p key={smurf.id}>{smurf.name} - Age: {smurf.age} - Height: {smurf.height}</p>
        ))}
      </div>
      <button onClick={fetchSmurfs}>Release the Smurfs!</button>
      <SmurfForm addSmurf={addSmurf} />
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
});

export default connect (
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfList);