import { useState } from 'react';
import sprite from 'images/sprite.svg';

import { useTranslation } from 'react-i18next';

import {
  OptionButton,
  DropdownWrapper,
  ToggleButton,
  ToggleIcon,
  DropdownOptions,
} from './StatsSelect.styled';

function StatsSelect({ type, startValue, options, sendSelectedValue }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(startValue);

  const { i18n } = useTranslation();
  const currentLng = i18n.language.slice(0, 2);

  const dropDownToggle = () => {
    setOpen(prevState => !prevState);
  };

  const dropDownClose = () => {
    setOpen(false);
  }

  const onOptionClick = (value) => {
    setSelectedValue(value);
    sendSelectedValue(value);
    dropDownClose()
  };

  const onOutsideClick = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      dropDownClose();
    }
  }

  return (
    <DropdownWrapper onBlur={onOutsideClick}>
      <ToggleButton onClick={dropDownToggle}>
        {currentLng === "en" ? selectedValue.displayValueEng : selectedValue.displayValueUkr}
        <ToggleIcon>
          <use href={`${sprite}#check`}/>
        </ToggleIcon>
      </ToggleButton>
      {open && (
        <DropdownOptions>
          {options.map(option => (
            <OptionButton onClick={() => onOptionClick(option)} key={option.value}>{currentLng === "en" ? option.displayValueEng : option.displayValueUkr}</OptionButton>
          ))}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
}

export default StatsSelect;
