import { useState, useEffect } from "react";
import { map } from "lodash";
import { Address as AddressCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { Address } from "./Address";
import styles from "./ListAddresses.module.scss";
import { NoResult } from "@/components/Shared";

const addressCtrl = new AddressCtrl();

export function ListAddresses(props) {
  const { reload, onReload } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!addresses || addresses.length === 0)
    return <NoResult text="No tienes ninguna dirección" />;

  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <Address
          key={address.id}
          addressId={address.id}
          address={address.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
