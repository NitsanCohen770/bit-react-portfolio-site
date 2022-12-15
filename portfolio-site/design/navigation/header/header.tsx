import { AppBar } from '@mui/material';
import { Container } from '@mui/material';
import { Link } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import React, { ReactNode } from 'react';
import { HeaderLink } from './header.type';
import { Typography } from '@showoff/design.widgets.typography';

export type HeaderProps = {
  logo: ReactNode;
  navLinks: HeaderLink[];
  themeToggle?: ReactNode;
};

export function Header({ logo, navLinks = [], themeToggle }: HeaderProps) {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: 'text.secondary'
      }}
    >
      <Toolbar
        disableGutters
        sx={{ minHeight: 64, width: '100%' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {logo}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.url}
                  underline="none"
                >
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="textPrimary"
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
              {themeToggle && themeToggle}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
