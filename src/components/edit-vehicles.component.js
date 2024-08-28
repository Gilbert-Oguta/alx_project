import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditVehicledata extends Component {
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
      service: '',
      vehicleType: '',
      contact: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
      services: ['four wheel', 'three wheel', 'two wheel', 'car wash', 'vehicle maintenance', 'detailing']
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/vehicles/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          service: response.data.service,
          vehicleType: response.data.vehicleType,
          contact: response.data.contact,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeService(e) {
    this.setState({
      service: e.target.value
    })
  }

  onChangeVehicleType(e) {
    this.setState({
      vehicleType: e.target.value
    })
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
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
    }

    console.log(vehicle);

    axios.post('http://localhost:5000/vehicles/update/' + this.props.match.params.id, vehicle)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Vehicle Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select 
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(user => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))
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
                {
                  this.state.services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Vehicle Type: </label>
            <input 
                type="text"
                required
                className="form-control"
                value={this.state.vehicleType}
                onChange={this.onChangeVehicleType}
            />
          </div>
          <div className="form-group"> 
            <label>Owner's Contact: </label>
            <input 
                type="text"
                required
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
            />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input 
                type="text"
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
            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
