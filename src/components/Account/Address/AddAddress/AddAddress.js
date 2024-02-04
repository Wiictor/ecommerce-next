import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import styles from "./AddAddress.module.scss";
import { AddressForm } from "../AddressForm";

export function AddAddress(props) {
  const { onReload } = props;
  const [show, setShow] = useState(false);

  const onToggleButton = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onToggleButton}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onToggleButton} title="Nueva dirección">
        <AddressForm onClose={onToggleButton} onReload={onReload} />
      </BasicModal>
    </>
  );
}
