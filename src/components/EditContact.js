import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class EditContact extends React.Component{
    constructor(props){
        super(props);

        this.editContact = this.editContact.bind(this);
        this.getId = this.getId.bind(this);
    }

    editContact(e){
        let p = document.getElementById('msg');
        p.style.color = 'rgb(221, 20, 20)';

        // validation
        if(this.refs.name.value != '' &&
           this.refs.phone.value != ''){
        
            let contact = {
                _id: this.getId(),
                name: this.refs.name.value,
                phone: this.refs.phone.value
            }

            // if we wanted to save to database this is where we would interact with our api
            this.props.editContact(contact);

            p.innerText = 'Contact updated!';

            e.preventDefault();
        } else {
            p.innerText = 'Please fill all inputs';
        }
    }

    getId(){
        // we can get url from window.location.href and parse it to get id
        let url = window.location.href;
        let i = url.length - 1;

        while(url[i] != '/')
            i = i - 1;
        i = i + 1;

        let s = '';
        for(; i < url.length; i++)
            s += url[i];

        return parseInt(s);
    }
    
    render(){
        return(
            <div className="layout">
                <h1>Edit Contact:</h1>
                <hr />
                <form id="contactForm" onSubmit={this.editContact}>
                    <div className="form-box">
                        <label>Name:</label>
                        <input type="text" ref="name" placeholder="Name" />
                    </div>
                    <div className="form-box">
                        <label>Phone</label>
                        <input type="text" ref="phone" placeholder="Phone" />
                    </div>
                </form>
                <div className="btn-margin">
                    <button type="submit" form="contactForm" className="save-btn">Save</button>
                    <Link to="/" className="edit-btn"><span>&larr;</span>Back</Link>
                </div>
                <p id="msg"></p>
            </div>
        );
    }
}

export default EditContact;