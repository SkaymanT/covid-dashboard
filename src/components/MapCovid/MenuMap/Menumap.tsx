import React, { Fragment } from 'react';

import styles from '@/components/MapCovid/MenuMap/MenuMap.scss';
import { ICategory, ILegend } from '@/types/Covid';

export interface IRadioGroup {
  categories: ICategory[];
  legend: ILegend[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MenuMap: React.FC<IRadioGroup> = ({ categories, legend, onChange }): JSX.Element => (
  <Fragment>
    <div className={styles['filter-group']}>
      {categories.map((item, index) => (
        <div key={item.id}>
          <input
            id={`${item.id}`}
            type="radio"
            name="group"
            value={index}
            checked={item.checked}
            onChange={e => onChange(e)}
          />
          <label htmlFor={`${item.id}`}>{item.name}</label>
        </div>
      ))}
    </div>
    <div className={styles['calculation-box']}>
      {legend.map(item => (
        <p>
          <i style={{ backgroundColor: item.color }} />
          {item.text}
        </p>
      ))}
    </div>
  </Fragment>
);
export default MenuMap;
