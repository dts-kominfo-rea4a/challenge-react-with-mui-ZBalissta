import './App.css';
import React, { useState } from 'react';
import { Styled } from '@mui/material/styles';
import {
  Container,
  Grid, 
  Paper, 
  Box
} from '@mui/material';
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [getData, setData] = useState(contactJSON);
  const addContacts = (value) => {
    const newData = [
      ...data, value
    ]};
  };
  
  return (
    <div className="App">
    <Container maxWidth="lg">
    <Box sx={{ bgcolor: '#F0F8FF', height: '100vh' }}>
    <Header />
    <Grid sx={{ marginTop: '20px' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
    <Item>
    <ContactForm fnAddContacts={addContacts} />
    </Item>
    </Grid>
    <Grid item xs={6}>
    <Item>
    <Contact data={data} />
    </Item>
    </Grid>
    </Grid>
    </Box>
    </Container>
    </div>
  );
  
  export default App;
  