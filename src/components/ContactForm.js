// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSlotProps } from "@mui/base";


const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    const [getName, setName] = React.useState('Jhon Doe');
    const [getPhone, setPhone] = React.useState('089600000101');
    const [getEmail, setEmail] = React.useState('jhondoe@gmail.com');
    const [getPhoto, setPhoto] = React.useState('http://placekitten.com/500');

    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = React.useState({
        name: getName,
        phone: getPhone,
        email: getEmail,
        photo: getPhoto
    });

    const onSubmit = (onSub) => {
        onSub.preventDefault();
        props.fnAddContacts({
            name: getName,
            phone: getPhone,
            email: getEmail,
            photo: getPhoto
        })

        setName ('Howdy');
        setPhone('08961324240101');
        setEmail('howdy@gmail.com');
        setPhoto('http://placekitten.com/500');
    };

    const nameOnChange = (onSub) => {
        setName(onSub.target.value);
    };

    const phoneOnChange = (onSub) => {
        setPhone(onSub.target.value);
    };

    const emailOnChange = (onSub) => {
        setEmail(onSub.target.value);
    };

    const photoOnChange = (onSub) => {
        setPhoto(onSub.target.value);
    };

    return (
        <> 
            <form onSubmit={onSubmit}>
                <TextField fullWidth
                    value={getName}
                    onChange={nameOnChange}
                    id="name"
                    label="Name "
                    variant="filled" 
                />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                    value={getPhone}
                    onChange={phoneOnChange}
                    id="phone"
                    label="Phone "
                    variant="filled" 
                />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                    value={getEmail}
                    onChange={emailOnChange}
                    id="email"
                    label="Email"
                    variant="filled"
                />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                    value={getPhoto}
                    onChange={photoOnChange}
                    id="photo"
                    label="Photo"
                    variant="filled"
                />

                <Button type="submit" sx={{marginTop: "0,5em"}} variant="outlined">Add New Contact</Button>
            </form>
        </>
    );
};

export default ContactForm;