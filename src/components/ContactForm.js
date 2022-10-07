// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { Box, TextField, Card, CardContent, CardActions, Button } from '@mui/material';

const ContactForm = ({addContact}) => {
    const datas = {
        name: '',
        phone: '',
        email: '',
        photo: ''
    };
    const [getNewContact, setNewContact] = useState(datas);

    const onChange = (name, value) => {
        setNewContact({...getNewContact, [name]: value });
    };

    const onSubmit = len => {
        len.preventDefault();
        addContact(getNewContact);
        setNewContact(datas);
    };
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    
    return (
        <> 
            <Box>
                <Card>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <TextField fullWidth id="name" label="name" value={getNewContact.name} onChange={(len) => onChange('name', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="phone" value={getNewContact.phone} onChange={(len) => handleChange('phone', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="email" value={getNewContact.email} onChange={(len) => handleChange('email', len.target.value)}></TextField>
                            <TextField fullWidth sx={{ marginTop: '0.5em' }} id="name" label="photo" value={getNewContact.photo} onChange={(len) => handleChange('photo', len.target.value)}></TextField>
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