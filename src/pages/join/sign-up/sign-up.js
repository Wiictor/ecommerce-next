import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";
import { Seo } from "@/components/Shared";

export default function SignUpPage() {
  return (
    <>
      <Seo title="Gaming - Registro" />
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear cuenta</h3>

          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in">Atrás</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
