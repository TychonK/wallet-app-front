import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';

import { HashLoader } from 'react-spinners';

import { Logo, LanguageSwitcher } from 'components';
import {
  FormWrapper,
  FormBg,
  Label,
  Input,
  Form,
  InputIcon,
  SignInBtn,
  SignUpBtn,
  ErrorText,
  Switcher,
} from './LoginForm.styled';
import * as Yup from 'yup';
import icons from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.auth.authReducer.isLoading); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string(t('email_string'))
        .email(t('email_error'))
        .required(t('email_require')),
      password: Yup.string('pass_string')
        .min(6, t('pass_error'))
        .max(12)
        .required(t('pass_require')),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dispatch(logIn({ email, password }));
      resetForm();
    },
  });
  return (
    <FormWrapper>
      <FormBg>
        <Switcher>
          <LanguageSwitcher />
        </Switcher>
        <Logo />
        {isLoading ? (
          <HashLoader
            color="#00d4ff"
            size={100} />
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <Label>
              <InputIcon width="24" height="24">
                <use href={`${icons}#email`}></use>
              </InputIcon>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('email')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}
            </Label>

            <Label>
              <InputIcon width="24" height="24">
                <use href={`${icons}#lock`}></use>
              </InputIcon>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder={t('pass')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="off"
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorText>{formik.errors.password}!</ErrorText>
              ) : null}
            </Label>

            <SignInBtn type="submit">{t('login')}</SignInBtn>
            <SignUpBtn to="/register">{t('register')}</SignUpBtn>
          </Form>
        )}
      </FormBg>
    </FormWrapper>
  );
};

export default LoginForm;
