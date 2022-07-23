import React from "react";
import { Button } from "react-bootstrap";
import * as Validator from 'validatorjs';

const Input = ({Label, type, name, onChange}) => {
    return (
        <div>
            <label>{Label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErr = ({errors}) => {
    return (
        <ul style={{color: 'red'}}>
            {
                errors.map((i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        repassword: '',
        kota: '',
        provinsi: '',
        kodepos: '',
        member: false,
        errors: []
    }

    handSub = event => {
        event.preventDefault();
        const {email, password} = this.state;

        let data = { email, password };
        
        let rules = {
            email: 'required|email',
            password: 'required|min:18'
        };

        let validation = new Validator(data, rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })

        // let message = [];

        // if(email.length === 0) {
        //     message = [...message, 'Email tidak boleh kosong'];
        // }

        // if(password.length === 0) {
        //     message = [...message, 'Password tidak boleh kosong'];
        // }

        // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // if(!re.test(String(email).toLowerCase())) {
        //     message = [...message, 'Email tidak valid'];
        // }

        // if(password.length < 8) {
        //     message = [...message, 'Password terlalu pendek'];
        // }

        // if(message.length > 0) {
        //     this.setState({
        //         errors: message
        //     });
        // }else {
        //     alert(`
        //         email: ${this.state.email}
        //         password: ${this.state.password}
        //     `);
        //     this.setState({
        //         errors: []
        //     })
        // }
}

    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '5px solid grey',
            padding: '10px',
            borderRadius: '10px'
        }
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErr errors={this.state.errors}/>
                }
                <h3>LogIn Page</h3>
            <form onSubmit={this.handSub}>
                <Input type='text' name='username' Label='Username' onChange={value => this.setState({username: value})} />
                <Input type='email' name='email' Label='Email' onChange={value => this.setState({email: value})} />
                <Input type='password' name='password' Label='Password' onChange={value => this.setState({password: value})} />
                <Input type='password' name='repassword' Label='Re-Password' onChange={value => this.setState({repassword: value})} />
                <Input type='text' name='kota' Label='Kota' onChange={value => this.setState({kota: value})} />
                <Input type='text' name='provinsi' Label='Provinsi' onChange={value => this.setState({provinsi: value})} />
                <Input type='text' name='kodepos' Label='Kode Pos' onChange={value => this.setState({kodepos: value})} /> <br />
                <label>
                Member : <input type='checkbox' checked={this.state.member} name='member' onChange={value => this.setState({member: value})} />
                </label> <br />
                <Button type="submite" >Submite</Button>
            </form> <br />
            
            <br />
            </div>
        )
    }
}
