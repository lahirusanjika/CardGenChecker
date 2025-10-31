import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, AppBar, Toolbar, Typography, Tabs, Tab, Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Generator from './Generator';
import Checker from './Checker';

const theme = createTheme();

function App() {
  const [tab, setTab] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">CardGenChecker - Educational GUI</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} centered>
            <Tab label="Generate" />
            <Tab label="Check" />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}><Generator /></TabPanel>
        <TabPanel value={tab} index={1}><Checker /></TabPanel>
      </Container>
    </ThemeProvider>
  );
}

function TabPanel({ children, value, index }) {
  return value === index && <Box p={3}>{children}</Box>;
}

export default App;