import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledDiv, StyledTopic, StyledTime } from '../styles';
import { TextField, Box, Alert } from '@mui/material';
import { StyledButton } from '../styles';
import { useParams } from 'react-router-dom';

const contactDetails = {
  '0': '0764444444',
  '1': '0761111111',
  '2': '0763333333',
  '3': '0762222222'
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const { contactId } = useParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Contact Us';
    console.log('ContactForm component mounted');
  }, []);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validProviders = [
    'gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com',
    'aol.com', 'zoho.com', 'protonmail.com', 'yandex.com', 'gmx.com',
    'mail.com', 'tutanota.com', 'hushmail.com'
  ];

  const isEmailFromValidProvider = (email) => {
    return validProviders.some(provider => email.includes(provider));
  };

  const handleInputChange = (setter, field, value) => {
    setter(value);
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        if (!value) {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          newErrors.email = 'Email is invalid';
        } else if (!isEmailFromValidProvider(value)) {
          newErrors.email = 'Email must be from a valid provider';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (!value) {
          newErrors.message = 'Message is required';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setSuccess('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setSubject('');
    }
  };

  const boxStyle = {
    '& .MuiTextField-root': { m: 1, width: '100%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
    maxWidth: '50vw',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }

  const contactNumber = contactDetails[contactId];
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      color: theme === 'light' ? '#000' : 'black',
      '& fieldset': {
        borderColor: theme === 'light' ? '#000' : 'black',
      },
      '&:hover fieldset': {
        borderColor: theme === 'light' ? '#000' : 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme === 'light' ? '#000' : 'black',
      },
    },
    '& .MuiInputLabel-root': {
      color: theme === 'light' ? '#000' : 'black',
    },
  }
  return (
    <StyledDiv theme={theme}>
      <StyledTopic theme={theme}>Contact Us</StyledTopic>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={boxStyle}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => handleInputChange(setName, 'name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={textFieldStyle}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(setEmail, 'email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={textFieldStyle}
        />
        <TextField
          label="Phone"
          variant="outlined"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={textFieldStyle}
        />
        <TextField
          label="Subject"
          variant="outlined"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={textFieldStyle}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => handleInputChange(setMessage, 'message', e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
          sx={textFieldStyle}
        />
        <StyledButton>SUBMIT</StyledButton>
      </Box>
      {success && (
        <Alert severity="success" sx={{ mt: 2, width: '50vw' }}>
          {success}
        </Alert>
      )}
      {contactNumber && (
        <StyledTime theme={theme} sx={{ fontSize: '12px', mt: 2 }}>
          <h6>For more : {contactNumber}</h6>
        </StyledTime>
      )}
    </StyledDiv>
  );
};

export default ContactForm;
