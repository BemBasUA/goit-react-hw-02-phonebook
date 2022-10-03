export const ContactList = ({ data, onClick }) => {
  return (
    <ul>
      {data.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button type="button" onClick={() => onClick(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
