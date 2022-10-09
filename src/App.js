import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import { Grid, Box, List } from '@mui/material';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactJSON);

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (inputData) => {
    const datas = {
      name: inputData.name,
      phone: inputData.phone,
      email: inputData.email,
      photo: inputData.photo
    };

    const newContact = [...contacts, datas];
    setContacts(newContact);
  };

  return (
    <div className="App">
      <Header />
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md:3}}>
          <Grid item xs={6}>
            <ContactForm fnAddContacts={addContact} />
          </Grid>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: '#e0f2f1' }}>
              {contacts.map((data) => (
                <Contact data={data} />  
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;