import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({ text, href }, index) => (
        <ActiveLink key={index} text={text} href={href} />
      ))}
    </nav>
  );
};
