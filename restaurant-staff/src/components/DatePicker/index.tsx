import { useState, useEffect } from "react";
import DateTime from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import { StyledDateTimeContainer } from "./styles";

interface DatePickerProps {
  onChange: (name: string, value: string) => void;
  value: string;
}

const DatePicker = ({ onChange, value }: DatePickerProps) => {
  const current = new Date();
  current.setMinutes(Math.floor(current.getMinutes() / 30) * 30);
  current.setSeconds(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(current);

  // Update internal state when value prop changes
  useEffect(() => {
    if (value) {
      setSelectedDate(new Date(value));
    }
  }, [value]);

  const handleDateChange = (value: string | moment.Moment | null) => {
    if (typeof value === "string") {
      const momentDate = moment(value, "YYYY-MM-DD HH:mm");
      setSelectedDate(momentDate.isValid() ? momentDate.toDate() : undefined);
      onChange("reservationTime", value); // Here we update the form's state
    } else if (moment.isMoment(value)) {
      setSelectedDate(value.toDate());
      onChange("reservationTime", value.format("YYYY-MM-DD HH:mm")); // Here we update the form's state
    } else {
      setSelectedDate(undefined);
      onChange("reservationTime", ""); // Here we update the form's state
    }
  };

  return (
    <StyledDateTimeContainer>
      <DateTime
        onChange={handleDateChange}
        value={selectedDate}
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm"
        timeConstraints={{
          hours: { min: 13, max: 23, step: 1 },
          minutes: { min: 0, max: 59, step: 30 },
        }}
      />
    </StyledDateTimeContainer>
  );
};

export default DatePicker;
