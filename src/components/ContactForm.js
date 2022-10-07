// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";


const ContactForm = (newContact) => {
    // Form berisi name, phone, email, dan photo url
    const [getName, setName] = React.useState('');
    const [getPhone, setPhone] = React.useState('');
    const [getEmail, setEmail] = React.useState('');
    const [getPhoto, setPhoto] = React.useState('');

    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const dataAddContact = () => {
        newContact({
            getName: name,
            getPhone: phone,
            getPhoto: photo,
            getEmail: email
        })

        setName ('Howdy');
        setPhone('08961324240101');
        setEmail('howdy@gmail.com');
        setPhoto('http://placekitten.com/500');
    };

    return (
        <> 
            <Card>
                <CardHeader title="Add New Contact"></CardHeader>
                <CardContent>
                    <form action="">
                        <Stack spacing={2}>
                            <TextField name="name" label="Name" value={name} onChange={(event) => setName(event.target.value)}></TextField>
                            <TextField name="phone" label="Phone" type="text" value={phone} onChange={event => setPhone(event.target.value)}></TextField>
                            <TextField name="email" label="Email" type="text" value={email} onChange={event => setEmail(event.target.value)}></TextField>
                            <TextField name="photo" label="Photo URL" type="text" value={photo} onChange={event => setPhoto(event.target.value)}></TextField>
                        </Stack>
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={localAddContact}>Save</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ContactForm;