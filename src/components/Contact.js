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
    let items = "";
    if(Array.isArray(data)) {
        items = (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data.map((row) => (
                    <ListItem key={row.id}>
                        <ListItemAvatar>
                        <Avatar>
                            <img alt="" src={row.photo} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={row.name}
                            secondary={
                                <>
                                     <Typography variant="span">
                                        {row.phone}
                                     </Typography><br/>
                                     <Typography variant="span">
                                        {row.email}
                                     </Typography>
                                </>
                            } />
                    </ListItem>
                ))}
            </List>
        );
    } else {
        items = (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem key={data.id}>
                    <ListItemAvatar>
                    <Avatar>
                        <img alt="" src={data.photo} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={data.name}
                        secondary={
                            <>
                                <Typography variant="span">
                                {data.phone}
                                </Typography><br/>
                                <Typography variant="span">
                                {data.email}
                                </Typography>
                            </>
                        } />
                </ListItem>
            </List>
        );
    }
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>{items}</>
    );
};

export default Contact;