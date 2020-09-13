import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = ({ isAuth }) => (
  <nav className={styles.navigation}>
    <NavLink exact to="/">
      <img
        className={styles.icon}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAABL1BMVEX///9hu0b1gh/gOj6WPZf9uCcAndymPImUPZhMu0jqYDHfNUD8sSb0fB6YOpWFUaPfuS8Al9pcuT9WtzdStjHm8+Pv9+39thv++PX1fxKm1pqWz4hqvlL4/Pe737JLtCb3m1v1ewCRL5Lf8NuMy3zR6cuAxm2e05HJ5cJEshr9sQD/+O3fLTKiWaPS6Pe/3/OEwOibze3m8/uy26h1wmCm2qVCuDv779jaswDcvULw8dz+w1j/uzf+4rX9vkb+x2b+6sr+2Jr+0YX+3aj9xnD5uZb5vqP6uIr70Lj4pnH828n0cAD+6973lE7qWB3wm4veGyTmYGHpgoTskJL42tr0xsbmbG/jTU/wrrDdABDVor2gJX7s1eCoaqy3g7eLGIzWu9bFncXz6/N4PJxMreLgBHDFAAAE10lEQVR4nO2Yf3uTVhiGD42N022dnENISgjYQAJJY5om2bofdXbWbs66rdbW6lZtrfn+n2GHNFUCpCsv5wW8xv2XXiUXd5734QVCSEFBQUHBZ4ZqqVkrBGlU3DZlppG1RwDDpgqVJKZlLeJH1SjjUhxaz9rFx0hXpBk58mrps6ymXk7WOleMlE9W+emX2maSHyUf12NFn9eSzFbWSh4Wo/NaUqeRtROnIgW1JJq1E0fVQ1osD5djoPLT2uegXqOwljTO/rZtKWGtPIxxHCoX3xKVrK2IETFFZmdtRRrha5EvCStrLWJEtSsHzxJRcSnZ73o3SisHt2wn3Po8TLER0Xkp+ykSywyLZX8tRtyCqJIHLWIHak9pDu7XHD1QeT0XafFlP78g2tnfFqeo8zMcZe1zhc+L5iYs4psjY3YGzWpY7shxHM1wg5HolMOYpAX+UHFHmlOva4aFtWTVljbumApj/PSK0jHbo5bvEbnebtuOMSdVcR2df2D2CbMj2aFvI8BKG7P5V0Oq0HH945JqqPN5NAxbVwLvkkzRbbFbrWV3Ih5GuZtJtVZ4QGrLNpWI5wvvA7ohbKBqnUZaXYZA29p80y2HR7vweH65ismsYZiLzzI9EzNZ3W1ZFY7lOjzDaw+XaMcW0LPgzzMLUlOYNB6Pdarc6GjdTarlhn4HEYLpJGtZ1LuXEBQ7iZgT8Y4jCKbDS6bhaXEx8C8XiGl5UGBiUS+qQmFtSMfQtWBiKkVZEHNayii2V+SvIIK16oAxfvvdHWRMyM7f+v4eMj/8CNAiP1WXUalub0G0HmJr/bwO0ao9wvWqdkFpkZ0uqtZydQekRZDj6v4C09pCtVquPoJpkV3kdsHKRWpPUL2qj4FxrSO3C7QiOA9Rr8YqsPSEPMbNawfqtY1pBb4YyTqm1nJ3F+q1gzpGcOuR79nbUC2y2/0Kj+4TsNfe/td47P8K9vptbQmPtadQrdrvq/9Dr6VnYK/7hVfh9V8k6H1evXD3xB7Ui6B6rd4He6Hu+6U1sNceqtf+83x6wQv2FHV/rf4B9XqG6gXfrM/vovLnX9DAvsTloAb0elFCpXcI9HrZwxUrHcG8jg9wtXqvYF5HyF6lg9cgrxpywXhisEkeYhesdwLyeo3tVeq9gCyLI2wtaPdPUhA7ASSGXrCpWPzyH73B94Ksi1oKgyx5JYsbGfqtaCb25jCe2XE6XtysdHgcR+ykhPy085Heyzhef/9zOy1O43hdNL9Ih+bbOFqEvGveSoWzWHERcpqOV9y4CHmwkorXeVyv87MUtFYexNVKJ7Cz2HHxwPAbFr9d08DwvQBxpdAwWFyEvEWeZDPm7roCeYc138O00Jf+BdTrAtMr7h3Iz3s8seY7uJZX/RUk4FP0OP3wDQ4fzpNoEbIplzGQB8m0CJmgeJWHSb2GGIHJG0m1UCaZfIoeE+FiExFaCBVLXK5L+mKtRJTrkg2RkxSnJbT78qY4LYFiYrWEiYnZEH6u65gsy+XJZMCZTPh/0ktrKrbwZOXBxnA4u/b5PzYWLzwELX7KqPN5UhHfYRKRmlzuY2iRiJLJ8uaCHRn+EvJA0DqNOtug/Ol0vFPXzWU48IXGY8UKa3Y2b0RTJoui8h07uPGxQtz6/f6NzzOMcWxBQUFBARL/AsmFE0CkaQT4AAAAAElFTkSuQmCC"
        alt="brand"
      />
    </NavLink>
    <div>
      {
        (isAuth)
          ? <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
          : <NavLink to="/login" activeClassName={styles.active}>Login</NavLink>
      }
      <NavLink to="/cards" activeClassName={styles.active}>Cards</NavLink>
    </div>
  </nav>
);

Navigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default Navigation;
