import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';

export const NewsletterFormComponent = () => {
  const [state, handleSubmit] = useForm("xnqlylwn");
  const [email, setEmail] = useState<string>('');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  };

  const handleOnChange = (event: any) => {
    const { value } = event.target;
    setEmail(value);
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <TextField id="email" type="email" name="email" placeholder="Enter your e-mail adress" variant="outlined" onChange={handleOnChange}/>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <Button type="submit" variant="contained" className="newsletter-form__button" disabled={!email.length}>
        Sign up
      </Button>
    </form>
  );
};
