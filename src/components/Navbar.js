import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../assets/images/logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-between" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '0px', xs: '20px' }, justifyContent: 'none',backgroundColor:'#3c3f45' }} px="20px" color="#3c3f45">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '10rem', height: '3rem' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      color="#3c3f45"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
