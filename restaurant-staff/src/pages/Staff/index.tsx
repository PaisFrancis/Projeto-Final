import { useEffect, useState } from "react";
import { newOrder } from "../../services/order"; // Import your order services
import { getTable, clearTable } from "../../services/table";
import { OrderStatus } from "../../models/order";
import {
  OrderForm,
  ErrorMessage,
  OrderFormWrapper,
  OrderTitle,
  OrderLabel,
  OrderInput,
  OrderButton,
  GetTotalForm,
  GetTotalInput,
  GetTotalFormWrapper,
  GetTotalTitle,
  GetTotalLabel,
  GetTotalButton,
  PageContainer,
  ItemCard,
  ItemContainer,
  SuccessMessage,
  ClearTableButton,
} from "./styles";
import { getAllItems } from "../../services/item";

interface FormState {
  tableNumber: string;
  items: { name: string; quantity: number }[];
  status: OrderStatus;
}

const initialState: FormState = {
  tableNumber: "",
  items: [],
  status: OrderStatus.PENDING,
};

const StaffPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [availableItems, setAvailableItems] = useState<{ name: string }[]>([]);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (submissionSuccess) {
      const timer = setTimeout(() => {
        setSubmissionSuccess(null);
      }, 2000);

      // Cleanup function to clear the timer if the component unmounts before the timer is up.
      return () => clearTimeout(timer);
    }
  }, [submissionSuccess]);

  const loadItems = async () => {
    const items = await getAllItems();
    setAvailableItems(items);
  };

  const handleItemClick = (itemName: string) => {
    const index = orderFormState.items.findIndex(
      (item) => item.name === itemName
    );

    if (index !== -1) {
      const newItems = [...orderFormState.items];
      newItems[index].quantity++;
      setOrderFormState({ ...orderFormState, items: newItems });
    } else {
      setOrderFormState({
        ...orderFormState,
        items: [...orderFormState.items, { name: itemName, quantity: 1 }],
      });
    }
  };

  const [orderFormState, setOrderFormState] = useState<FormState>(initialState);
  const [getTotalFormState, setGetTotalFormState] = useState<{
    tableNumber: string;
  }>({ tableNumber: "" });

  const [tableTotal, setTableTotal] = useState<number | null>(null);

  const handleOrderFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderFormState({
      ...orderFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleGetTotalFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGetTotalFormState({
      ...getTotalFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleOrderFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!orderFormState.tableNumber) {
      setError("Table number must be filled out.");
      return;
    }

    if (orderFormState.items.length === 0) {
      setError("Can't send order with no items");
      return;
    }

    try {
      await newOrder(
        parseInt(orderFormState.tableNumber),
        orderFormState.items,
        orderFormState.status
      );
      setSubmissionSuccess(true);
      setOrderFormState(initialState);
    } catch (error) {
      setError("There was an error submitting the order, please try again.");
      setSubmissionSuccess(false);
    }
  };

  const handleGetTotalFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!getTotalFormState.tableNumber) {
      setError("Table number must be filled out to get the total.");
      return;
    }

    const tableDetails = await getTable(
      parseInt(getTotalFormState.tableNumber)
    );

    const total = tableDetails.total;

    setTableTotal(total);
  };

  const handleClearTableClick = async () => {
    if (!getTotalFormState.tableNumber) {
      setError("Table number must be filled out to clear the table.");
      return;
    }

    try {
      await clearTable(parseInt(getTotalFormState.tableNumber));
      setTableTotal(0);
    } catch (error) {
      setError("There was an error clearing the table, please try again.");
    }
  };

  const formatOrderItems = (items: { name: string; quantity: number }[]) => {
    return items.map((item) => `${item.name} x ${item.quantity}`).join(", ");
  };

  return (
    <>
      <PageContainer>
        <OrderFormWrapper>
          <OrderTitle>New Order</OrderTitle>
          <OrderForm onSubmit={handleOrderFormSubmit}>
            <OrderLabel htmlFor="tableNumber">Table Number</OrderLabel>
            <OrderInput
              name="tableNumber"
              value={orderFormState.tableNumber}
              onChange={handleOrderFormChange}
            />
            <OrderLabel htmlFor="items">Items</OrderLabel>
            <div>{formatOrderItems(orderFormState.items)}</div>
            <OrderLabel htmlFor="status">Status</OrderLabel>
            <OrderInput name="status" value={orderFormState.status} />
            <OrderButton type="submit">Submit Order</OrderButton>
            {submissionSuccess === false && (
              <ErrorMessage>{error}</ErrorMessage>
            )}
            {submissionSuccess === true && (
              <SuccessMessage>Order successfully submitted</SuccessMessage>
            )}
          </OrderForm>
          <ItemContainer>
            {availableItems.map((item, index) => (
              <ItemCard key={index} onClick={() => handleItemClick(item.name)}>
                {item.name}
              </ItemCard>
            ))}
          </ItemContainer>
        </OrderFormWrapper>

        <GetTotalFormWrapper>
          <GetTotalTitle>Get Table Total</GetTotalTitle>
          <GetTotalForm onSubmit={handleGetTotalFormSubmit}>
            <GetTotalLabel htmlFor="tableNumber">Table Number</GetTotalLabel>
            <GetTotalInput
              name="tableNumber"
              value={getTotalFormState.tableNumber}
              onChange={handleGetTotalFormChange}
            />
            <GetTotalButton type="submit">Get Total</GetTotalButton>
            <ClearTableButton type="button" onClick={handleClearTableClick}>
              Clear Table
            </ClearTableButton>
          </GetTotalForm>

          {tableTotal !== null && <div>Table total: {tableTotal}</div>}
        </GetTotalFormWrapper>
      </PageContainer>
    </>
  );
};

export default StaffPage;
