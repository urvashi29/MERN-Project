import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './student.css'
import { signup } from './Userfunctions'
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
    }

    onChange(e) {
        this.setState({
            [e.target.type]: e.target.value,
            [e.target.name]: e.target.value
        })
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
                    onChange={this.onChange}
                    value={this.state.name}
                />
                <br />
                <br />
                <TextField
                    className='validate'
                    label="Email"
                    variant="outlined"
                    required='true'
                    type='email'
                    onChange={this.onChange}
                    value={this.state.email}
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
                <Button color='primary' handleSubmit={this.handleSubmit} variant="outlined" >Submit</Button>
            </div>
        )
    }
}