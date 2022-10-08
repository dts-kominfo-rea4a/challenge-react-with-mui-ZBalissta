// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { Box, TextField, Card, CardContent, CardActions, Button } from '@mui/material';

const ContactForm = ({addContact}) => {
    const dataState = {
        name: '',
        phone: '',
        email: '',
        photo: ''
    };
    const [newContact, setNewContact] = useState(dataState);

    const onChange = (name, value) => {
        setNewContact({...newContact, [name]: value });
    };

    const onSubmit = len => {
        len.preventDefault();
        addContact(newContact);
        setNewContact(dataState);
    };
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    
    return (
        <> 
            <Box>
                <Card>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <TextField fullWidth id="name" label="name" value={newContact.name} onChange={(len) => onChange('name', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="phone" value={newContact.phone} onChange={(len) => onChange('phone', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="email" value={newContact.email} onChange={(len) => onChange('email', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="photo" value={newContact.photo} onChange={(len) => onChange('photo', len.target.value)}></TextField>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" sx={{ marginTop: '0.5em' }} variant="outlined">Add Contact</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
};

export default ContactForm;