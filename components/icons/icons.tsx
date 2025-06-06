import styles from "@/components/icons/icons.module.css";
import { ReactNode } from "react";

export default function Icon({ children }: { children: ReactNode }) {
  return <span className={styles.icon}>{children}</span>;
}
