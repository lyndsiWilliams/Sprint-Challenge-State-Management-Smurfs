// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/smurfActions';
// Component
import SmurfForm from './SmurfForm';


const SmurfList = props => {
  console.log(props);

  return (
    <div>
      <div>
        {props.smurf.map(smurf => (
          <div key={smurf.id}>
            <p>{smurf.name} - Age: {smurf.age} - Height: {smurf.height}cm</p>
            <button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={props.getSmurfs}>Release the Smurfs!</button>
      <SmurfForm addSmurf={props.addSmurf} getSmurfs={props.getSmurfs} />
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
});

export default connect (
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(SmurfList);