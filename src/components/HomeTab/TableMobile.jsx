import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  MobileCard,
  MobileCardGroup,
  MobileCardItem,
  MobileCardItemValue,
  MobileCardItemColor,
  NoTransactions,
  MobileButtonDelete,
} from './TableMobile.styled';

import sprite from 'images/sprite.svg';

import ModalWindow from 'components/ModalWindow';
import DeleteModal from './DeleteModal';

import { useTranslation } from 'react-i18next';
import { operations } from '../../redux/transactions/transactions-operations';

function TableMobile({ data }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.slice(0, 2);

  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const onDelete = _id => {
    dispatch(operations.deleteTransaction(_id));
  };

  const handleOpenModal = _id => {
    setCurrentId(_id); // Set the ID of the transaction to be deleted
    setModalOpen(true); // Open the modal
  };

  return (
    <>
      {data.length === 0 ? (
        <NoTransactions>{t('no_transactions')}.</NoTransactions>
      ) : (
        <>
          {data.map(
            ({
              _id,
              date,
              typeTransaction,
              category,
              description,
              sum,
              categoryUA,
              balance,
            }) => (
              <MobileCard
                key={_id}
                type={typeTransaction === true ? 'income' : 'costs'}
              >
                <MobileCardGroup>
                  <MobileCardItem>{t('date')}</MobileCardItem>
                  <MobileCardItemValue>{date}</MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('type')}</MobileCardItem>
                  <MobileCardItemValue>
                    {typeTransaction === true ? '+' : '-'}
                  </MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('category')}</MobileCardItem>
                  <MobileCardItemValue>
                    {currentLanguage === 'en'
                      ? category ?? 'Income'
                      : categoryUA ?? 'Дохід'}
                  </MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('description')}</MobileCardItem>
                  <MobileCardItemValue>{description}</MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('sum')}</MobileCardItem>
                  <MobileCardItemColor
                    type={typeTransaction === true ? 'income' : 'costs'}
                  >
                    {sum}
                  </MobileCardItemColor>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('balance')}</MobileCardItem>
                  <MobileCardItemValue>{balance}</MobileCardItemValue>
                </MobileCardGroup>
                <MobileButtonDelete onClick={() => handleOpenModal(_id)}>
                  <svg width="16" height="16">
                    <use href={`${sprite}#minus-btn`} />
                  </svg>
                </MobileButtonDelete>
              </MobileCard>
            ),
          )}
        </>
      )}
      {isModalOpen && (
        <ModalWindow closeModal={setModalOpen}>
          <DeleteModal
            setModal={setModalOpen}
            onDelete={onDelete}
            _id={currentId}
          />
        </ModalWindow>
      )}
    </>
  );
}

export default TableMobile;
