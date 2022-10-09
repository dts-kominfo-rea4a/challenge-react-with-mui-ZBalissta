// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { Box, TextField, Card, Button, List, ListItem, ListItemText } from '@mui/material';

const ContactForm = (props) => {
    const [inputData, setInputData] = useState({
        name: "",
        phone: "",
        email: "",
        photo: ""
    });

    const onChangeHandl = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInputData(values => ({...values, [name]: value}));
    };

    const onSubmitHandl = (e) => {
        e.preventDefault();
        props.fnAddContacts(inputData);
        setInputData(inputData);
    };
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    
    return (
        <>
        <Card variant="outlined" sx={{width: '60%', marginLeft:'10%'  , p: 2, bgcolor: '#fffde7' }}> 
            <form action="" onSubmit={onSubmitHandl} >
                <List >
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Name"  value={inputData.name} name="name" onChange={onChangeHandl} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Phone"  value={inputData.phone} name="phone" onChange={onChangeHandl} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Email" value={inputData.email} name="email" onChange={onChangeHandl} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Photo URL"  value={inputData.photo} name="photo" onChange={onChangeHandl} />
                        </ListItemText>
                    </ListItem>
                </List>
                <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
                <Button type="submit">ADD NEW</Button>
                </Box>
            </form>
        </Card>
        </>
    );
};

export default ContactForm;