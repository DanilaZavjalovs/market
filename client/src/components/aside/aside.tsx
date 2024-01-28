import './aside.css';
import React, { useState } from 'react';

type Category = {
  name: string,
  id: string,
};

function Aside() {
  const [categories, setCategories] = useState<Category []>([
    {
      name: 'No category',
      id: 'noCategory',
    },
    {
      name: 'Clothes',
      id: 'clothes',
    },
    {
      name: 'Shoes',
      id: 'shoes',
    },
    {
      name: 'Computers',
      id: 'computers',
    },
  ]);

  return (
    <aside>
      <div className="aside__content">
        <div className="categories">
          <h4>Categories</h4>
          <ul className="categories__list">
            {categories.map((element) => (
              <li key={element.id}>{element.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
