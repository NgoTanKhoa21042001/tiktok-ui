import Header from '~/layouts/components/Header';
function HeaderOnly({ children }) {
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

export default HeaderOnly;
