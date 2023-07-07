// ItemsPage.tsx
import { useEffect, useState } from "react";
import { getAllItems } from "../../services/item";
import { ItemElement, ItemContainer } from "./styles";
import { Item } from "../../models/item";

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const res = await getAllItems();
    setItems(res);
  };

  return (
    <ItemContainer>
      <h1>Our Menu!</h1>
      {items.map((item) => (
        <ItemElement key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.observations}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </ItemElement>
      ))}
    </ItemContainer>
  );
};

export default ItemsPage;
