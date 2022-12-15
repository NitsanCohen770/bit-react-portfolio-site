import React, { } from 'react';
import { Icons } from '@showoff/personal-portfolio.ui.social.icons';
import { Box, Grid } from '@mui/material';
import { MarginType, Margin } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.widgets.breadcrumb';
import { Typography } from '@showoff/design.widgets.typography';
import { ContactForm, ContactFormType } from '@showoff/contact-me.ui.contact-form';
import { Artwork } from '@showoff/contact-me.ui.artwork';

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
          height: '75%',
          width: '75%',
          ml: 15,
          mt: 2
        }}>
          <Artwork />
        </Box>
      </Grid>
    </Grid>
  );
}
