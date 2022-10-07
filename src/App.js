import './App.css';
import React, { useState } from 'react';
import {Card, CardContent, Container, Grid, List} from "@mui/material";
import Header from './components/Header';
import ContactFrom from './components/ContactForm';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const [getContacts, setContacts] = useState(contactJSON);

  const addContact = (newData) => {
    setContacts([...contacts, newData])
  };
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Grid container spacing={2}>
          <Grid item={2}>
            <ContactFrom addContact={addContact}></ContactFrom>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <List>
                  {
                    contacts.map((item, index) => {
                      return <Contact key={index} data={item} />
                    })
                  }
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

export default App;