import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, LanguageSwitcher } from 'components';
import { register } from '../../redux/auth/auth-operations';

import { HashLoader } from 'react-spinners';

import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import Indicator from './indicator';
import icons from 'images/sprite.svg';
import {
  Button,
  Input,
  Label,
  Icon,
  Wrap,
  Form,
  ErrMessage,
  ButtonLink,
  Switcher,
} from '../../pages/RegistrationPage/RegistrationPage.styled';

const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.auth.authReducer.isLoading);


  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const onSubmit = ({ email, password, name }, { resetForm }) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };

  const validationSchema = yup.object({
    email: yup
      .string(t('email_string)'))
      .email(t('email_error)'))
      .required(t('email_require')),
    password: yup
      .string(t('pass_string'))

      .max(12, t('pass_max'))
      .required(t('pass_require'))
      .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6,}/, t('pass_matches')),
    confirmPassword: yup
      .string()
      .required(t('pass_confirm'))
      .oneOf([yup.ref('password'), null], t('pass_confirm_error')),
    name: yup
      .string('Enter your name')
      .required(t('name_min'))
      .min(1, t('name_min'))
      .max(12, t('name_max')),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        isLoading ? (
          <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
      }}>
              <HashLoader color="#00d4ff" size={100} />
            </div>
          ) : (
        <Form>
          <Wrap>
            <Switcher>
              <LanguageSwitcher />
            </Switcher>
            <Logo />
          </Wrap>
          
           
          <div>
            <Label htmlFor="email">
              <Icon width="20" height="20">
                <use href={`${icons}#email`}></use>
              </Icon>
              <Input
                type="email"
                id="email"
                placeholder={t('email')}
                value={values.email}
                onChange={handleChange}
              />
              <ErrMessage>{errors.email}</ErrMessage>
            </Label>
          </div>

          <div>
            <Label htmlFor="password">
              <Icon width="20" height="20">
                <use href={`${icons}#lock`}></use>
              </Icon>
              <Input
                type="password"
                id="password"
                placeholder={t('pass')}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrMessage>{errors.password}</ErrMessage>
            </Label>
          </div>
          <div>
            <Label htmlFor="confirmPassword">
              <Icon width="20" height="20" fill="currentColor">
                <use href={`${icons}#lock`}></use>
              </Icon>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder={t('pass_confirm')}
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <ErrMessage>{errors.confirmPassword}</ErrMessage>
              <Indicator value={values.password}></Indicator>
            </Label>
          </div>

          <div>
            <Label htmlFor="name">
              <Icon width="20" height="20" fill="currentColor">
                <use href={`${icons}#account`}></use>
              </Icon>
              <Input
                name="name"
                type="name"
                id="name"
                placeholder={t('name')}
                value={values.name}
                onChange={handleChange}
              />
              <ErrMessage>{errors.name}</ErrMessage>
            </Label>
            </div>
           
          <Button type="submit" onClick={handleSubmit}>
            {t('register')}
          </Button>
          <ButtonLink to="/login">{t('login')}</ButtonLink>
        </Form>
        )
      )}
    </Formik>
  );
};
export default RegistrationForm;
