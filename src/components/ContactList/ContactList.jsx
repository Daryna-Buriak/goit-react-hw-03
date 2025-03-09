import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contact, filter, onDelete }) {
  const filteredContacts = contact.filter((contactCard) =>
    contactCard.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contactCard) => (
        <li key={contactCard.id}>
          <Contact contactItem={contactCard} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
