import Header from '~/components/Layout/components/Header';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          {/* truyền từ ngoài vaof */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
