import { useEffect, useState } from "react";
import { getAllOrders, updateOrder } from "../../services/order";
import { OrderElement, OrderContainer, Button } from "./styles";
import { Order, OrderStatus } from "../../models/order";

const OrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    loadOrders();
    // Call loadOrders every 5 seconds
    const intervalId = setInterval(loadOrders, 5000);
    // Clean up: clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const loadOrders = async () => {
    const res = await getAllOrders();
    setOrders(res);
  };

  const handleSelect = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleReady = async (orderId: string) => {
    await updateOrder({ id: orderId, status: OrderStatus.READY });
    loadOrders();
  };

  return (
    <OrderContainer>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        orders
          .filter((order) => order.status === OrderStatus.PENDING)
          .map((order) => (
            <OrderElement
              key={order.id}
              onClick={() => handleSelect(order)}
              selected={!!(selectedOrder && selectedOrder.id === order.id)}
            >
              <p>Table: {order.tableId}</p>
              <p>Status: {order.status}</p>
              <p>
                Items:{" "}
                {order.items
                  .map((item) => `${item.quantity}x ${item.menuItem.name}`)
                  .join(", ")}
              </p>
              {selectedOrder && selectedOrder.id === order.id && (
                <Button onClick={() => handleReady(order.id)}>Ready</Button>
              )}
            </OrderElement>
          ))
      ) : (
        <p>No orders</p>
      )}
    </OrderContainer>
  );
};

export default OrderPage;
