import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes } from '~/routes/';
import { DefaultLayout } from '~/layouts';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/following" element={<Following />}></Route> */}
          {publishRoutes.map((route, index) => {
            // Lặp qua mảng publishRoutes
            // Layout sẽ undefine vì cta ko cấu hình gì bên index ở routes
            // nếu mà ko có layout thì lấy thẻ chứ frag ko thì sẽ lấy DefaultLayout
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
