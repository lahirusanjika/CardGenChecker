import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Paper } from '@mui/material';
import { api } from '../preload'; // Via preload

export default function Generator() {
  const [bin, setBin] = useState('');
  const [count, setCount] = useState(10);
  const [cards, setCards] = useState([]);

  const generate = async () => {
    const result = await window.api.generateCards({ bin, count });
    setCards(result);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField label="BIN" value={bin} onChange={(e) => setBin(e.target.value)} fullWidth margin="normal" />
      <TextField label="Count" type="number" value={count} onChange={(e) => setCount(e.target.value)} fullWidth margin="normal" />
      <Button variant="contained" onClick={generate} fullWidth>Generate</Button>
      <List>
        {cards.map((card, i) => <ListItem key={i}><ListItemText primary={card} /></ListItem>)}
      </List>
    </Paper>
  );
}