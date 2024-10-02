import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { DateInput, ModalInput, DateIcon, CustomDateTimeStyles } from './DateTime.styled';
import sprite from 'images/sprite.svg';

const DateTime = ({date, setDt}) => {
    const renderInput = (props, openCalendar) => {

        return (
            <DateInput>
                <ModalInput
                    {...props}
                />
                <DateIcon type='button' onClick={openCalendar}>
                    <svg width="24" height="24">
                        <use href={`${sprite}#date`} />
                    </svg>
                </DateIcon>
            </DateInput>
        );
    };
  
    return (
        <CustomDateTimeStyles>
            <Datetime 
            renderInput={renderInput} 
            value={date} 
            dateFormat="DD.MM.YYYY" 
            timeFormat={false} 
            closeOnSelect 
            onChange={(e)=>setDt(e._d)} 
            />
        </CustomDateTimeStyles>
    )
}

export default DateTime;