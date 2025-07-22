import { ref, onValue } from 'firebase/database';
import database from '../Data/firebase.js';
import { useEffect, useState } from 'react';

export default function useMenuItemData() {
  const [menuItems, setItems] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, 'menuItems');
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setItems(data);
      }
    });
  }, []);

  return menuItems;
}
