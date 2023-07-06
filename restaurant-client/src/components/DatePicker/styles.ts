import styled from "styled-components";

export const StyledDateTimeContainer = styled.div`
  .rdt {
    background-color: ${(props) => props.theme.palette.background.primary};
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    padding: 10px;

    .rdtPicker {
      background-color: ${(props) => props.theme.palette.background.secondary};
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .rdtDay.rdtActive,
    .rdtHour.rdtActive,
    .rdtMinute.rdtActive,
    .rdtSecond.rdtActive {
      background: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.text.primary};
    }

    .rdtPrev span,
    .rdtNext span {
      color: ${(props) => props.theme.palette.text.secondary};
    }

    .rdtTimeToggle {
      color: ${(props) => props.theme.palette.text.primary};
    }

    .rdtSwitch {
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
`;
