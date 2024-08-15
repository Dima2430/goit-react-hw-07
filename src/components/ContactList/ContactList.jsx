import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contact}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
