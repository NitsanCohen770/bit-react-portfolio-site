import { Appbar } from '@showoff/personal-portfolio.navigation.appbar';
import { Appfooter } from '@showoff/personal-portfolio.navigation.appfooter';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material';
import React, { ReactNode } from 'react'; // move to top

export type MainProps = {
  /**
   * the content to be rendered inside the layout.
   */
  children?: ReactNode;
}; // Please extend the the HTMLAttributes i.e & HTMLAttributes

const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 68
})); // Please explain why this is needed.

export function Main({ children }: MainProps) {
  return (
    <MainRoot>
      <Appbar />
      <Container
        maxWidth='lg'
        sx={{ paddingTop: '68px', height: '100%' }}
      >
        <main
          style={{
            flexGrow: 1
          }}
        >
          {children}
        </main>
      </Container>
      <Container
        maxWidth='lg'
      >
        <Box sx={{ pt: 10 }}>
          <Appfooter />
        </Box>
      </Container>
    </MainRoot>
  );
}
