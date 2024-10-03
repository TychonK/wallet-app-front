import { useEffect, useState } from 'react';
import getCurrency from 'services/exchange-rate-api';
import PropTypes from 'prop-types';
import Media from 'react-media';
import {
  CurrencyTable,
  TableHeader,
  HeadCell,
  TableBody,
  TableRow,
  TableData,
  TableFooter,
} from './Currency.styled';
import { useTranslation } from 'react-i18next';
import { HashLoader } from 'react-spinners';

export const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [status, setStatus] = useState('idle');
  const { t } = useTranslation();

  useEffect(() => {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));

    (async () => {
      setStatus('pending');
      if (Date.now() - localCurrency?.time < 36) {
        // 3600000 = 1 hour
        setCurrency(localCurrency.data);
        setStatus('success');
      } else {
        setStatus('pending');

        try {
          const response = await getCurrency();

          if (response.ok) {
            const data = await response.json();

            localStorage.setItem(
              'currency',
              JSON.stringify({ data, time: Date.now() }),
            );

            setCurrency(data);
            setStatus('success');
          } else {
            setStatus('error');
          }
        } catch (error) {
          setStatus('error');
        }
      }
    })();
  }, []);

  return (
    <CurrencyTable>
      <TableHeader>
        <TableRow>
          <HeadCell>{ t('convert_from') } { currency.base }</HeadCell>
          <HeadCell>{t('convert_to')} {/*currency.qoute*/}</HeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {status === 'success' &&
          (
            <TableRow key="Convert to">
              <TableData>{t("convert_to")}</TableData>
              <TableData>{parseFloat(currency.rates.PLN).toFixed(2)}</TableData>
            </TableRow>)
        }
        {status === 'pending' && (
          <HashLoader
            ariaLabel="loading-indicator"
            color="#00d4ff"
            size={80}
          />
        )}
      </TableBody>
      <Media query="(min-width: 1280px)" render={() => <TableFooter />} />
    </CurrencyTable>
  );
};

Currency.propTypes = {
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      buy: PropTypes.number.isRequired,
      sale: PropTypes.number.isRequired,
    }),
  ),
};
