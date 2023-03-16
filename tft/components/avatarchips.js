import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={8}>
      <Chip avatar={<Avatar>M</Avatar>} label="Chiara" />
      <Chip avatar={<Avatar>E</Avatar>} label="Elia"/>
      
      <Chip
        avatar={<Avatar alt="Antonio" src="./immagineavatar.jpeg" />}
        label="Antonio"
        variant="outlined"
      />
    </Stack>
  );
}