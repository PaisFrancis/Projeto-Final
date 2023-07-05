import { useEffect, useState } from "react";
import {
  getReservations,
  deleteReservation,
  newReservation,
  updateReservation,
} from "../../services/reservation"; // Import your services
import {
  Button,
  FormInput,
  ReservationElement,
  ReservationContainer,
} from "./styles";
import { Form } from "react-router-dom";
import { Reservation } from "../../models/reservation";
import DatePicker from "../../components/DatePicker";
import { getAllTables } from "../../services/table";
import { Table } from "../../models/table";

interface FormState {
  customerName: string;
  tableId: string;
  reservationTime: string;
}

const initialFormState: FormState = {
  customerName: "",
  tableId: "",
  reservationTime: "",
};

function convertToDatetimeLocalString(date: any): string {
  if (date instanceof Date) {
    return date.toISOString().substring(0, 16);
  } else {
    // Handle the case when date is not an instance of Date
    // If it's a string, try creating a new Date object
    try {
      const newDate = new Date(date);
      return newDate.toISOString().substring(0, 16);
    } catch {
      // If we can't convert it, return an empty string or some default value
      return "";
    }
  }
}

const ReservationPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tables, setTables] = useState<Table[]>([]);

  const [formState, setFormState] = useState<FormState>({
    customerName: "",
    tableId: "",
    reservationTime: "",
  });

  useEffect(() => {
    loadTables();
    loadReservations();
  }, []);

  const loadTables = async () => {
    const tableData = await getAllTables();
    setTables(tableData);
  };

  const loadReservations = async () => {
    const res = await getReservations();
    setReservations(res);
  };

  const handleSelect = (reservation: Reservation) => {
    if (selectedReservation && selectedReservation.id === reservation.id) {
      setSelectedReservation(null);
      setFormState(initialFormState);
    } else {
      setSelectedReservation(reservation);
      setFormState({
        customerName: reservation.customerName,
        tableId: String(reservation.tableId),
        reservationTime: convertToDatetimeLocalString(
          reservation.reservationTime
        ),
      });
    }
  };

  const handleDelete = async (reservationId: string) => {
    await deleteReservation(reservationId);
    loadReservations();
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (name: string, value: string) => {
    handleFormChange({
      target: {
        name,
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if any fields are empty and set an error message if they are
    if (
      !formState.customerName ||
      !formState.tableId ||
      !formState.reservationTime
    ) {
      setError("All fields must be filled out.");
      return;
    }

    // Check if the table exists
    const tableId = parseInt(formState.tableId);
    if (!tables.some((table) => table.number === tableId)) {
      setError("The selected table does not exist.");
      return;
    }

    if (selectedReservation) {
      await updateReservation({
        id: selectedReservation.id,
        customerName: formState.customerName,
        tableId: parseInt(formState.tableId),
        reservationTime: new Date(formState.reservationTime),
      });
    } else {
      // Otherwise, create a new reservation
      await newReservation(
        formState.customerName,
        parseInt(formState.tableId),
        new Date(formState.reservationTime)
      );
    }

    setFormState({
      customerName: "",
      tableId: "",
      reservationTime: "",
    });

    loadReservations();
  };

  return (
    <ReservationContainer>
      <h1>Reservations</h1>
      {reservations.map((reservation) => (
        <ReservationElement
          key={reservation.id}
          onClick={() => handleSelect(reservation)}
          selected={
            !!(selectedReservation && selectedReservation.id === reservation.id)
          }
        >
          <p>Customer: {reservation.customerName}</p>
          <p>Table: {reservation.tableId}</p>
          <p>Time: {new Date(reservation.reservationTime).toLocaleString()}</p>
          <Button onClick={() => handleDelete(reservation.id)}>Delete</Button>
        </ReservationElement>
      ))}

      <Form onSubmit={handleFormSubmit}>
        <FormInput
          name="customerName"
          placeholder="Customer Name"
          value={formState.customerName || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="tableId"
          type="number"
          placeholder="Table ID"
          value={formState.tableId || ""}
          onChange={handleFormChange}
        />
        <DatePicker
          value={formState.reservationTime || ""}
          onChange={handleDateChange}
        />
        <Button type="submit">
          {selectedReservation ? "Update" : "Create"} Reservation
        </Button>
        {error && <div>{error}</div>}
      </Form>
    </ReservationContainer>
  );
};

export default ReservationPage;
