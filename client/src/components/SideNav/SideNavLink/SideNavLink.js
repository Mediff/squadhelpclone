
import React from 'react';
import styles from './SideNavLink.module.sass';

export const SideNavLink = ({icon, text, clickHandler}) => {
  return (
      <div className={styles.mainContainer} onClick={()=> clickHandler()}>
            <div className={styles.icon}>
                <i className={icon}/>
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
            <div className={styles.arrowIcon}>
                <i className='fas fa-angle-right'/>
            </div>
      </div>
  );
};