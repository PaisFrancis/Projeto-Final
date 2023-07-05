import { useEffect, useState } from "react";
import {
  newItem,
  updateItem,
  getAllItems,
  deleteItem,
} from "../../services/item";
import { Button, FormInput, ItemElement, ItemContainer, Form } from "./styles";
import { Item } from "../../models/item";

interface FormState {
  name: string;
  price: string;
  description: string;
  observations: string;
}

const initialFormState: FormState = {
  name: "",
  price: "",
  description: "",
  observations: "",
};

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const res = await getAllItems();
    setItems(res);
  };

  const handleSelect = (item: Item) => {
    if (selectedItem && selectedItem.id === item.id) {
      setSelectedItem(null);
      setFormState(initialFormState);
    } else {
      setSelectedItem(item);
      setFormState({
        name: item.name,
        description: item.description,
        price: String(item.price),
        observations: item.observations || "",
      });
    }
  };

  const handleDelete = async (itemId: string) => {
    await deleteItem(itemId);
    loadItems();
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
    if (!formState.name || !formState.price || !formState.description) {
      setError("All non-optional fields must be filled out.");
      return;
    }
    // Check if the itemName is already in use
    const itemName = formState.name;
    if (
      items.some((item) => item.name.toLowerCase() === itemName.toLowerCase())
    ) {
      setError("Can't have duplicate item names!");
      return;
    }

    if (selectedItem) {
      await updateItem({
        ...selectedItem,
        name: formState.name,
        description: formState.description,
        price: parseFloat(formState.price),
        observations: formState.observations || undefined,
      });
    } else {
      // Now, newItem uses individual parameters instead of an object
      await newItem(
        formState.name,
        formState.description,
        parseFloat(formState.price),
        formState.observations || undefined
      );
    }

    setFormState(initialFormState);
    loadItems();
  };

  return (
    <ItemContainer>
      <h1>Items</h1>
      {items.map((item) => (
        <ItemElement
          key={item.id}
          onClick={() => handleSelect(item)}
          selected={!!(selectedItem && selectedItem.id === item.id)}
        >
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <Button onClick={() => handleDelete(item.id)}>Delete</Button>
        </ItemElement>
      ))}

      <Form onSubmit={handleFormSubmit}>
        <FormInput
          name="name"
          placeholder="Item Name"
          value={formState.name || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="description"
          placeholder="Description"
          value={formState.description || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="price"
          type="number"
          placeholder="Price"
          value={formState.price || ""}
          onChange={handleFormChange}
        />
        <FormInput
          name="observations"
          placeholder="Observations (optional)"
          value={formState.observations || ""}
          onChange={handleFormChange}
        />
        {error && <div>{error}</div>}
        <Button type="submit">{selectedItem ? "Update" : "Create"} Item</Button>
      </Form>
    </ItemContainer>
  );
};

export default ItemsPage;
