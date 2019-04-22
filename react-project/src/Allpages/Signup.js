import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './student.css'
import { NavLink } from 'react-router-dom'
import { signup } from './Userfunctions'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            department: '',
            contact: ''
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.type]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    handleChangeUserName(e) {
        if (e.target.value.match("^[a-zA-Z ]*$") != null) {
            this.setState({ name: e.target.value });
        }

    }

    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email: email });
    }

    handleSubmit(e) {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            pasword: this.state.password,
            department: this.state.department,
            contact: this.state.contact
        }
        signup(newUser).then(res => {
            this.props.history.push(`/studentlogin`)
        })
    }
    render() {
        return (
            <div className='signup'>
                <span className='typography'>SignUp</span>
                <br />
                <br />
                <TextField
                    className='validate'
                    label='Name'
                    variant="outlined"
                    name="name"
                    required='true'
                    onChange={this.handleChangeUserName}
                    value={this.state.name}
                />
                <br />
                <br />
                <ValidatorForm
                    ref="form"
                >
                    <TextValidator
                        className='validate'
                        variant="outlined"
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    <br />
                    <TextField
                        className='validate'
                        label="Password"
                        variant="outlined"
                        type="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <br />
                    <br />
                    <TextField
                        className='validate'
                        label="Department"
                        variant="outlined"
                        onChange={this.onChange}
                        required='true'
                        value={this.state.dept}
                    />
                    <br />
                    <br />
                    <TextField
                        className='validate'
                        label="Contact"
                        required='true'
                        name="contact"
                        variant="outlined"
                        value={this.state.contact}
                        onChange={this.onChange}
                    />
                    <br />
                    <br />

                    {/*  add data to database */}
                    <NavLink to='/studentlogin'>
                        <Button color='primary' handleSubmit={this.handleSubmit} variant="outlined" >Submit</Button>
                    </NavLink>
                </ValidatorForm>
            </div>
        )
    }
}