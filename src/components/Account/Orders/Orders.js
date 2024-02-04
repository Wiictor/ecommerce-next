import { useState, useEffect } from "react";
import { map } from "lodash";
import { Order as OrderCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { Order } from "./Order/Order";

const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!orders || orders.length === 0)
    return <NoResult text="No tienes ningún pedido" />;

  return (
    <div>
      {map(orders, (order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}
