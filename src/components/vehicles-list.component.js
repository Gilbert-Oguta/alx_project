import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define the vehicle functional component to render each vehicle
const Vehicledata = props => (
  <tr>
    <td>{props.vehicle.username}</td>
    <td>{props.vehicle.service}</td>
    <td>{props.vehicle.vehicleType}</td>
    <td>{props.vehicle.contact}</td>
    <td>{props.vehicle.description}</td>
    <td>{props.vehicle.duration}</td>
    <td>{props.vehicle.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.vehicledatas._id}>edit</Link> | <a href="#" onClick={() => { props.deleteVehicledata(props.vehicledatas._id) }}>delete</a>
    </td>
  </tr>
);

export default class VehicledataList extends Component {
  constructor(props) {
    super(props);

    this.deleteVehicledata = this.deleteVehicledata.bind(this);

    this.state = { vehicles: [] };
  }

  // Fetch vehiclesdata from the server when the component mounts
  componentDidMount() {
    axios.get('http://localhost:5000/vehicledatas/')
      .then(response => {
        console.log(response.data);
        this.setState({ vehicledatas: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Delete vehicle from the server and update the state
  deleteVehicledata(id) {
    axios.delete('http://localhost:5000/vehicledatas/'+id)
      .then(response => { console.log(response.data); });

    this.setState({
        vehicles: this.state.vehicles.filter(el => el._id !== id)
    });
  }

  // Map over exercises and return a list of Vehicle components
  vehicleList() {
    return this.state.vehicles.map(currentvehicle => {
      return <Vehicledata 
                vehicle={currentvehicle} 
                deleteVehicledata={this.deleteVehicledata} 
                key={currentvehicle._id} 
             />;
    });
  }

  // Render the table with the exercise data
  render() {
    return (
      <div>
        <h3>Logged vehicles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Service</th>
              <th>Vehicle Type</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.vehicleList() }
          </tbody>
        </table>
      </div>
    );
  }
}
