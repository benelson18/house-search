import { ReactElement } from "react";
import styles from "./fancytitle.module.css";

export default function FancyTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): ReactElement {
  const chars = text.split("");

  const content = chars.map((char, index) => {
    const style = { "--i": index + 1 } as React.CSSProperties;

    return (
      <span style={style} key={index}>
        {char}
      </span>
    );
  });

  return (
    <div className={`${styles.wrapper} ${styles.wave} ${className} whitespace-nowrap`}>
      {content}
    </div>
  );
}
