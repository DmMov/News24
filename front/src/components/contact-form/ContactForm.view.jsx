import React from 'react';
import { FormFieldView } from 'components/index';

import './ContactForm.style';

const name = '';

export const ContactFormView = () =>
  <form className="form contact-form dg">
    <p className="title-text">ви можете з легкістю зв'язатися з нами заповнивши поля, що розташовані нижче</p>
    <FormFieldView title="ім'я та прізвище" name={name} placeholder="Введіть своє ім'я та прізвище" />
    <FormFieldView title="емейл" name={name} placeholder="example@mail.com" />
    <FormFieldView title="тема" name={name} placeholder="Введіть тему повідомлення" />
    <FormFieldView title="повідомлення" name={name} placeholder="Напишіть коротке повідомлення" />
    <button type="submit" className="btn submit-btn">відправити</button>
  </form>
