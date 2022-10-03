import React from 'react';
import Form from '../form/form';
import ListContact from '../listContacts/listContacts';
import { Filter } from '../filter/filter';
import { Wrapper } from './App.styled';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return (
      contacts ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);

  const addContact = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(item => item.id !== id);
      return newContacts;
    });
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) => {
      const normalizeName = name.toLocaleLowerCase();
      const result = normalizeName.includes(normalizeFilter);
      return result;
    });
    return filterContacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter value="filter" onChange={handleChange} />
      <ListContact items={filteredContacts} removeContact={removeContact} />
    </Wrapper>
  );
}
