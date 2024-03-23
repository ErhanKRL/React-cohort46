function Person({ person }) {
    if (!person) {
      return null; 
    }
    const { first, last } = person.name;
    const { email, phone } = person;
    return (
      <ul style={{ listStyle: 'none' }}>
        <li>{first}</li>
        <li>{last}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    );
  }
  
  export default Person;
  