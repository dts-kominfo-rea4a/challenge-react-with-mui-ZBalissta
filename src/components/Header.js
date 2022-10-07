// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import {Divider, Typography, Stack, Container} from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Container>
        <Typography variant="h3" sx={{textAlign: "center", paddingTop: "2rem"}}>Call a Friend</Typography>
      </Container>
      <Divider sx={{padding: "2rem"}}>Your friendly contact app</Divider>
    </>
  );
};

export default Header;