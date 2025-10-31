import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { api } from '../preload';

export default function Checker() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Load from file sim
    setResults([]); // Placeholder
  }, []);

  const check = async () => {
    const cards = []; // Load from data/cards.txt
    const res = await window.api.checkCards(cards);
    setResults(res);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Button variant="contained" onClick={check} fullWidth>Check Cards</Button>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Card</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.split(' | ')[0]}</TableCell>
                <TableCell>{row.split(' | ')[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}