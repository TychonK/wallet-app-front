import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import 'moment/locale/uk';
import {
  ModalContainer,
  ModalBtn,
  ModalTitle,
  ModalForm,
  CheckboxContainer,
  CheckboxText,
  CheckboxTextPlus,
  CheckboxTextMinus,
  ModalInputWrapper,
  ModalInput,
  ModalInputComment,
  ModalButtonAdd,
  ModalButtonCancel,
  ErrorMesage,
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';
import SelectCategory from 'components/SelectCategory';
import DateTime from 'components/DateTime';
import { operations } from 'redux/transactions/transactions-operations';
import { useTranslation } from 'react-i18next';
import ApiServices from 'services/ApiServices';
import { toast } from 'react-toastify';

const ModalAddTransaction = ({ closeModal: setModal }) => {
  const [categ, setCateg] = useState('');
  const [dt, setDt] = useState(new Date());
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language.slice(0, 2);
  moment.locale(currentLng);

  const formik = useFormik({
    initialValues: {
      typeTransaction: false,
      sum: '',
      date: dt.toLocaleString([], { day: 'numeric', month: 'numeric', year: 'numeric' }),
      description: '',
      category: categ,
    },
    validationSchema: Yup.object({
      typeTransaction: Yup.boolean().required(),
      sum: Yup.string()
        .matches(/^\d+(\.\d\d)?$/, t('transaction_string'))
        .required(t('sum_require')),
      date: Yup.string().required(t('date_require')),
      description: Yup.string(),
      category: Yup.string(),
    }),
    onSubmit: values => {
      console.log("category:" + categ)
      values = { ...values, category: categ, date: dt.toLocaleDateString('en-US'), sum: +sum };
      dispatch(operations.addTransaction(values));
      setModal(false);
    },
  });

  const {
    values: { typeTransaction, sum, description },
    handleChange,
    handleSubmit,
  } = formik;

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const data = await ApiServices.getCategories();
        setOptions(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getAllCategories();
  }, []);

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <ModalBtn type="button" onClick={handleCancel}>
        <svg width="16" height="16">
          <use href={`${sprite}#close`} />
        </svg>
      </ModalBtn>
      <ModalContainer>
        <ModalTitle>{t('transaction_add')}</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
          <CheckboxContainer>
            {typeTransaction ? (
              <CheckboxTextPlus>{t('income')}</CheckboxTextPlus>
            ) : (
              <CheckboxText>{t('income')}</CheckboxText>
            )}
            <Checkbox value={typeTransaction} onChange={handleChange} />
            {typeTransaction ? (
              <CheckboxText>{t('expense')}</CheckboxText>
            ) : (
              <CheckboxTextMinus>{t('expense')}</CheckboxTextMinus>
            )}
          </CheckboxContainer>
          {!typeTransaction && (
            <SelectCategory options={options} set={setCateg}>
              <input
                type="text"
                name="category"
                value={categ}
                onChange={handleChange}
                hidden
              />
            </SelectCategory>
          )}
          <ModalInputWrapper>
            <ModalInput
              name="sum"
              value={sum}
              type="number"
              onChange={handleChange}
              placeholder="0.00"
              autoComplete="off"
            />
            {formik.touched.sum && formik.errors.sum ? (
              <ErrorMesage>{formik.errors.sum}</ErrorMesage>
            ) : null}
            <DateTime date={dt} setDt={setDt} />
            {formik.touched.date && formik.errors.date ? (
              <ErrorMesage>{formik.errors.date}</ErrorMesage>
            ) : null}
          </ModalInputWrapper>
          <ModalInputComment
            name="description"
            value={description}
            type="text"
            placeholder={t('description')}
            onChange={handleChange}
          />
          <ModalButtonAdd type="submit">{t('add')}</ModalButtonAdd>
          <ModalButtonCancel type="button" onClick={handleCancel}>
            {t('cancel')}
          </ModalButtonCancel>
        </ModalForm>
      </ModalContainer>
    </>
  );
};

export default ModalAddTransaction;
