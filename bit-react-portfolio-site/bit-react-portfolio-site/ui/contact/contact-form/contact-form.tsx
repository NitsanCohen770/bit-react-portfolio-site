import * as Yup from 'yup';
import React from 'react';
import { useFormik } from 'formik';
import { ContactFormType } from './contact-form.type';
import { TextField } from '@enlear/bit-react-portfolio-site-design-system.inputs.text-field';
import { Button } from '@enlear/bit-react-portfolio-site-design-system.widgets.button';

export type ContactFormProps = {
  onSubmit: (values: ContactFormType) => void | Promise<void>;
};

export function ContactForm({ onSubmit: onFormSubmit }: ContactFormProps) {
  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Email is invalid').required('Email is required'),
      message: Yup.string().required('Message is required'),
      subject: Yup.string().required('Subject is required')
    }),
    onSubmit: async (values) => {
      const { name, email, message, subject } = values;
      await onFormSubmit({ name, email, message, subject });
    }
  });

  return (
    <form
      onSubmit={contactForm.handleSubmit}
      noValidate>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '16px'
      }}>
        <TextField
          id="name"
          fullWidth
          name='name'
          label="Name"
          margin="dense"
          size="small"
          value={contactForm.values.name}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          helperText={contactForm.touched.name && contactForm.errors.name}
          error={Boolean(contactForm.touched.name && Boolean(contactForm.errors.name))}
        />
        <TextField
          id="email"
          fullWidth
          name='email'
          label="Email"
          size="small"
          margin="dense"
          value={contactForm.values.email}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          helperText={contactForm.touched.email && contactForm.errors.email}
          error={Boolean(contactForm.touched.email && Boolean(contactForm.errors.email))}
        />
        <TextField
          id="subject"
          fullWidth
          name='subject'
          label="Subject"
          size="small"
          margin="dense"
          value={contactForm.values.subject}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          helperText={contactForm.touched.subject && contactForm.errors.subject}
          error={Boolean(contactForm.touched.subject && Boolean(contactForm.errors.subject))}
        />
        <TextField
          id="message"
          fullWidth
          name='message'
          label="Message"
          multiline
          rows={4}
          size="small"
          margin="dense"
          value={contactForm.values.message}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          helperText={contactForm.touched.message && contactForm.errors.message}
          error={Boolean(contactForm.touched.message && Boolean(contactForm.errors.message))}
        />
        <div>
          <Button
            value={'Send Message'}
            type={'submit'}
            sx={{ width: '208px' }}
            size="large"
            variant="contained"
            disabled={contactForm.isSubmitting || !contactForm.isValid || !contactForm.dirty}
            loading={contactForm.isSubmitting}
          />
        </div>
      </div>
    </form>
  );
}
