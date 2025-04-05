import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import * as s from './style.css';

interface DateTimePickerProps {
  date: string;
  minDate?: string;
  onChange: (date: Date | null) => void;
}

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return (
      <input
        type="text"
        readOnly
        value={props.value}
        onClick={props.onClick}
        ref={ref}
        className={s.datePickerDisplay}
      />
    );
  }
);

const DateTimePicker = ({ date, minDate, onChange }: DateTimePickerProps) => {
  const parsedDate = new Date(date);
  const parsedMinDate = minDate ? new Date(minDate) : undefined;
  const [selectedDate, setSelectedDate] = useState<Date | null>(parsedDate);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={s.wrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        timeIntervals={30}
        dateFormat="yyyy. M. d. a h:mm:ss"
        locale={ko}
        customInput={<CustomInput />}
        popperPlacement="bottom-start"
        minDate={parsedMinDate}
      />
    </div>
  );
};

export default DateTimePicker;
