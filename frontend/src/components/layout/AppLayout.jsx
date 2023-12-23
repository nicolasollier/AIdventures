import Header from './header/Header';
import SidePanel from '../layout/SidePanel';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SidePanel />
      {children}
    </>
  );
};

export default AppLayout;