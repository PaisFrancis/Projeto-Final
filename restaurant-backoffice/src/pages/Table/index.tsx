import { useEffect, useState } from "react";
import {
  newTable,
  updateTable,
  getAllTables,
  deleteTable,
} from "../../services/table";
import {
  Button,
  FormInput,
  TableElement,
  TableContainer,
  Form,
} from "./styles";
import { Table } from "../../models/table";

interface FormState {
  number: string;
  capacity: string;
}

const initialFormState: FormState = {
  number: "",
  capacity: "",
};

const TablesPage = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTables();
  }, []);

  const loadTables = async () => {
    const res = await getAllTables();
    setTables(res);
  };

  const handleSelect = (table: Table) => {
    if (selectedTable && selectedTable.number === table.number) {
      setSelectedTable(null);
      setFormState(initialFormState);
    } else {
      setSelectedTable(table);
      setFormState({
        number: String(table.number),
        capacity: String(table.capacity),
      });
    }
  };

  const handleDelete = async (tableNumber: number) => {
    await deleteTable(tableNumber);
    loadTables();
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if any fields are empty and set an error message if they are
    if (!formState.number || !formState.capacity) {
      setError("All fields must be filled out.");
      return;
    }

    // Check if the tableId is already in use
    const tableNumber = parseInt(formState.number);
    if (tables.some((table) => table.number === tableNumber)) {
      setError("Can't have duplicate table numbers!");
      return;
    }

    if (selectedTable) {
      await updateTable({
        ...selectedTable,
        number: parseInt(formState.number),
        capacity: parseInt(formState.capacity),
      });
    } else {
      await newTable(parseInt(formState.number), parseInt(formState.capacity));
    }

    setFormState(initialFormState);
    loadTables();
  };

  return (
    <TableContainer>
      <h1>Tables</h1>
      {tables.map((table) => (
        <TableElement
          key={table.number}
          onClick={() => handleSelect(table)}
          selected={!!(selectedTable && selectedTable.number === table.number)}
        >
          <p>Table Number: {table.number}</p>
          <p>Capacity: {table.capacity}</p>
          <Button onClick={() => handleDelete(table.number)}>Delete</Button>
        </TableElement>
      ))}

      <Form onSubmit={handleFormSubmit}>
        <FormInput
          name="number"
          type="number"
          placeholder="Table Number"
          value={formState.number || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="capacity"
          type="number"
          placeholder="Capacity"
          value={formState.capacity || ""}
          onChange={handleFormChange}
        />
        <Button type="submit">
          {selectedTable ? "Update" : "Create"} Table
        </Button>
        {error && <div>{error}</div>}
      </Form>
    </TableContainer>
  );
};

export default TablesPage;
