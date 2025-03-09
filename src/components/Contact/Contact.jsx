import css from "./Contact.module.css";
import { TiUser, TiPhone } from "react-icons/ti";

export default function Contact({
  contactItem: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactCard}>
        <div className={css.namePhone}>
          <TiUser size={30} color="black" />
          <p>{name}</p>
        </div>
        <div className={css.namePhone}>
          <TiPhone size={30} color="black" />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.contactDelete}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
