import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import styles from "./sign-in.module.scss";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
    <>
      <Seo title="Gaming - Iniciar sesión" />
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>

          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
