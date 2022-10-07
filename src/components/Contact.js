// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {

    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={data.photo}></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={
                        <Typography>
                            {data.phone} <br/>
                            {data.email}
                        </Typography>
                    }
                />
            </ListItem>
        </>
    );
};

export default Contact;