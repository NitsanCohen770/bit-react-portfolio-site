import React, { } from 'react';
import { Breadcrumb } from '@enlear/bit-react-portfolio-site-design-system.widgets.breadcrumb';
import { Typography } from '@enlear/bit-react-portfolio-site-design-system.widgets.typography';
import { LinkText } from '@enlear/bit-react-portfolio-site-design-system.navigation.link-text';
import { Margin, MarginType } from '@enlear/bit-react-portfolio-site-design-system.layouts.margin';
import { Icons } from '@enlear/bit-react-portfolio-site.ui.social.icons';
import { Box, Grid } from '@mui/material';
import { Artwork } from '@enlear/bit-react-portfolio-site.ui.contact.artwork';
import { ContactForm, ContactFormType } from '@enlear/bit-react-portfolio-site.ui.contact.contact-form';

export type ContactProps = {
};

export function Contact({ }: ContactProps) {

  const handleFormSubmit = async (values: ContactFormType) => {
    console.log(values);
  }

  return (
    <Grid container
      spacing={5}
    >
      <Grid item
        xs={12}
        md={6}
        sm={12}
      >
        <Breadcrumb
          crumbs={[
            { crumb: 'Contact.' }
          ]}
        />
        <Margin
          mt={MarginType.MEDIUM}
        >
          <Typography
            variant="body1"
          >
            Get in touch or shoot me an email directly on <b>Tobiassundberg@gmail.com</b>
          </Typography>
        </Margin>
        <Margin
          mt={MarginType.MEDIUM}
        >
          <ContactForm
            onSubmit={handleFormSubmit}
          />
        </Margin>
        <Margin
          mt={MarginType.LARGE}
        >
          <Box>
            <LinkText
              linkText='Go to my homepage'
              url='/'
              fontSize={16}
              fontWeight={400}
              iconSize={'medium'}
              color='secondary'
            />
          </Box>
        </Margin>
        <Margin
          mt={MarginType.MEDIUM}
        >
          <Icons />
        </Margin>
      </Grid>
      <Grid item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '65%',
          ml: 10,
          mt: 5
        }}>
          <Artwork />
        </Box>
      </Grid>
    </Grid>
  );
}
