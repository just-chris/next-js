import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  message
}) => (
  <div>
    <h1>Hi {firstName + ' ' + lastName}!</h1>
    <p>{message}</p>
  </div>
);
