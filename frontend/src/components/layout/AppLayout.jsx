import Header from '../layout/Header';
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