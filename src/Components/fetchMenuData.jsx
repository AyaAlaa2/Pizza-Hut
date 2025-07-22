import { ref, onValue } from 'firebase/database';
import database from '../Data/firebase.js';
import { useEffect, useState } from 'react';

export default function useMenuCat() {
  const [menuCategory, setMenuCategory] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, 'menuCategories');
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMenuCategory(data);
      }
    });
  }, []);

  return menuCategory;
}
