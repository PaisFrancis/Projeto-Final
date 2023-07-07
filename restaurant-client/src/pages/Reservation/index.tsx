import { useEffect, useState } from "react";
import {
  deleteReservation,
  newReservation,
  updateReservation,
  getReservationForUser,
} from "../../services/reservation"; // Import your services
import {
  Button,
  FormInput,
  ReservationElement,
  ReservationContainer,
  TableContainer,
  TableCard,
} from "./styles";
import { Form } from "react-router-dom";
import { Reservation } from "../../models/reservation";
import DatePicker from "../../components/DatePicker";
import { getAllTables } from "../../services/table";
import { Table } from "../../models/table";
import { useApp } from "../../hooks/useApp";

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
  const { user } = useApp(); // get the current user's info from the context

  useEffect(() => {
    loadTables();
    if (user) {
      loadReservations();
    }
  }, [user]);

  const loadTables = async () => {
    const tableData = await getAllTables();
    setTables(tableData);
  };

  const loadReservations = async () => {
    if (!user || !user.id) {
      return; // Exit if the user is not logged in
    }
    const res = await getReservationForUser(user.id);

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

  const isReservationTimeAvailable = (
    tableId: number,
    reservationTime: Date
  ): boolean => {
    // reservation duration is one hour.
    const reservationDurationInMilliseconds = 60 * 60 * 1000;

    // Check if the table is already booked within the reservation time slot.
    const existingReservation = reservations.find((reservation) => {
      if (reservation.tableId !== tableId) {
        return false;
      }

      const existingReservationTime = new Date(
        reservation.reservationTime
      ).getTime();
      const proposedStart = reservationTime.getTime();
      const proposedEnd = proposedStart + reservationDurationInMilliseconds;

      const reservationStart = existingReservationTime;
      const reservationEnd =
        reservationStart + reservationDurationInMilliseconds;

      // Check if the proposed start or end falls within an existing reservation slot
      return (
        (proposedStart >= reservationStart && proposedStart < reservationEnd) ||
        (proposedEnd > reservationStart && proposedEnd <= reservationEnd)
      );
    });

    return !existingReservation;
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

    const reservationTime = new Date(formState.reservationTime);
    if (!isReservationTimeAvailable(tableId, reservationTime)) {
      setError("Reservation time is not available.");
      return;
    }

    // Parse reservation time to a Date object and extract the hours
    const reservationDate = new Date(formState.reservationTime);
    const reservationHour = reservationDate.getHours();

    // Check if the reservation hour is between 13:00 and 23:00
    if (reservationHour < 13 || reservationHour > 23) {
      setError("Our opening hours are from 13:00 to 23:00.");
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
          placeholder="Under the name of"
          value={formState.customerName || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="tableId"
          type="number"
          placeholder="Table Number"
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
      <h3>Available Tables:</h3>
      <TableContainer>
        {tables.map((table) => (
          <TableCard key={table.number}>
            Table Number: {table.number} Capacity: {table.capacity}{" "}
          </TableCard>
        ))}
      </TableContainer>
    </ReservationContainer>
  );
};

export default ReservationPage;
