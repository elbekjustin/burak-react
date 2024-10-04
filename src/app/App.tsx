import React from "react";
import "../css/app.css";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { RippleBadge } from "./styled";

function App() {
  return (
    // <Container maxWidth="sm">
    <Container sx={{ background: "orange" }}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4}}>
           <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript width REDUX
           </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
             <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
       
      </Stack>
    </Container>
  );
}

export default App;
