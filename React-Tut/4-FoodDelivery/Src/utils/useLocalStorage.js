import { useState, useEffect } from 'react';

const useLocalStorage = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  async function fetchRegistrations(){
        const storedRegistrations = await JSON.parse(localStorage.getItem('registrations'));
        setRegistrations(storedRegistrations || []);
  }

  async function addRegistration(newRegistration){
    const isDuplicate = registrations.some((registration) => (
        registration.name === newRegistration.name &&
        registration.phoneNumber === newRegistration.phoneNumber &&
        registration.email === newRegistration.email
      ));
  
      if (isDuplicate) {
        return 'User already exists!';
      }
      
      let message = '';

      const updatedRegistrations = [...registrations, newRegistration];
      localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
      setRegistrations(updatedRegistrations);
      message = 'Registration Successful';
  
      return message;
  }

  return {
    registrations,
    addRegistration,
  };
};

export default useLocalStorage;

