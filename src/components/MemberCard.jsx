import React from 'react';
import { Card as MuiCard, CardMedia, CardContent, Typography } from '@mui/material';

export function Card({ name, role, profilePicture, theme }) {
  return (
    <MuiCard sx={{ 
        width: '100%', 
        maxWidth: 400, 
        margin: 2,
        backgroundColor: theme === 'light' ? 'white' : 'gray',
        color: theme === 'light' ? '#008AE0' : 'white',
      }}
    >
      <CardMedia
        sx={{ 
          height: 230, 
        }}
        image={profilePicture}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

const MemberCard = ({ theme }) => {
  const members = [
    { name: 'Mem 1', role: 'Owner', profilePicture: '/profilePic.jpg' },
    { name: 'Mem 2', role: 'Manager', profilePicture: '/profilePic.jpg' },
    { name: 'Mem 3', role: 'Member', profilePicture: '/profilePic.jpg' },
  ];

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        width: '100%'
      }}
    >
      {members.map((member, index) => (
        <Card
          key={index}
          name={member.name}
          role={member.role}
          theme={theme}
          profilePicture={member.profilePicture}
        />
      ))}
    </div>
  );
}

export default MemberCard;
