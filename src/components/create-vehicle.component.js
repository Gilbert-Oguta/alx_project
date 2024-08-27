import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateVehicledata extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeService = this.onChangeService.bind(this);
    this.onChangeVehicleType = this.onChangeVehicleType.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      service: 'four wheel',
      vehicleType: '',
      contact: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeService(e) {
    this.setState({
      service: e.target.value
    });
  }

  onChangeVehicleType(e) {
    this.setState({
      vehicleType: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const vehicle = {
      username: this.state.username,
      service: this.state.service,
      vehicleType: this.state.vehicleType,
      contact: this.state.contact,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(vehicle);

    axios.post('http://localhost:5000/exercises/add', vehicle)
      .then(res => console.log(res.data))
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Client Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Choose Service: </label>
            <select
              required
              className="form-control"
              value={this.state.service}
              onChange={this.onChangeService}>
              <option value="four wheel">Four Wheel</option>
              <option value="three wheel">Three Wheel</option>
              <option value="two wheel">Two Wheel</option>
              <option value="car wash">Car Wash</option>
              <option value="vehicle maintenance">Vehicle Maintenance</option>
              <option value="detailing">Detailing</option>
            </select>
          </div>
          <div className="form-group">
            <label>Vehicle Type: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.vehicleType}
              onChange={this.onChangeVehicleType}
            />
          </div>
          <div className="form-group">
            <label>Owner's Contact: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.contact}
              onChange={this.onChangeContact}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Client Details" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
