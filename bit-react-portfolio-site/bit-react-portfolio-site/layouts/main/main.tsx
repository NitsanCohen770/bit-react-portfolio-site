import { Appbar } from '@enlear/bit-react-portfolio-site.navigation.appbar';
import { Appfooter } from '@enlear/bit-react-portfolio-site.navigation.appfooter';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material';
import React, { ReactNode } from 'react';

export type MainProps = {
  /**
   * the content to be rendered inside the layout.
   */
  children?: ReactNode;
};

const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  height: '100%',
  paddingTop: 68
}));

export function Main({ children }: MainProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <MainRoot>
        <Appbar />
        <Container
          maxWidth='lg'
          sx={{ paddingTop: '68px', height: '100%' }}
        >
          {children}
          <Box sx={{ pt: 10 }}>
            <Appfooter />
          </Box>
        </Container>
      </MainRoot>
    </Box>
  );
}
