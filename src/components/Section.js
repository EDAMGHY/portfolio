import { NavLink, useLocation } from 'react-router-dom';
const Section = ({ section, children, nav }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <section className={section}>
      <div className='btn-container' id='up'>
        <NavLink
          to={pathname === '/skills' ? '/' : '/skills'}
          style={{ color: 'var(--dark)' }}
        >
          <span>{pathname === '/skills' ? nav.index : nav.top}</span>
        </NavLink>
      </div>
      <div className='btn-container' id='right'>
        <NavLink
          to={pathname === '/about' ? '/' : '/about'}
          style={{ color: 'var(--dark)' }}
        >
          <span>{pathname === '/about' ? nav.index : nav.right}</span>
        </NavLink>
      </div>
      <div className='btn-container' id='down'>
        <NavLink
          to={pathname === '/contact' ? '/' : '/contact'}
          style={{ color: 'var(--dark)' }}
        >
          <span>{pathname === '/contact' ? nav.index : nav.bottom}</span>
        </NavLink>
      </div>
      <div className='btn-container' id='left'>
        <NavLink
          to={pathname === '/projects' ? '/' : '/projects'}
          style={{ color: 'var(--dark)' }}
        >
          <span>{pathname === '/projects' ? nav.index : nav.left}</span>
        </NavLink>
      </div>
      <div className='container'>{children}</div>
    </section>
  );
};
export default Section;
