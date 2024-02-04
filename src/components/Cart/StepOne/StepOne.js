import styles from "./StepOne.module.scss";
import { Basket } from "./Basket";
import { Summary } from "./Summary";

export function StepOne(props) {
  const { games } = props;

  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket games={games} />
      </div>
      <div className={styles.right}>
        <Summary games={games} />
      </div>
    </div>
  );
}
