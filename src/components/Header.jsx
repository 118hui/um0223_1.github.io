import Logo from '../assets/logo.png';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative z-10'>
      <div className='container py-3 md:py-2'>
        <div className='flex fixed justify-between items-center'>
          <NavLink exact to='/'>
            <img src={Logo} alt='' className='w-23 h-10' />
          </NavLink>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
