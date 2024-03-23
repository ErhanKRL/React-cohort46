import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    await fetch('https://www.randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => {
        const formattedPerson = {
          name: {
            first: data.results[0].name.first,
            last: data.results[0].name.last
          },
          email: data.results[0].email,
          phone: data.results[0].phone
        };
        setPerson(formattedPerson);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;
