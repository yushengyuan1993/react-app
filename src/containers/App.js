import { React, ReactRouterDOM } from '../config.js';
import _routes from '../routes/router.js';
import './App.scss';

const { BrowserRouter, Route, Link } = ReactRouterDOM;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          {/* <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/products">选课</Link>
            </li>
            <li>
              <Link to="/study">学习</Link>
            </li>
            <li>
              <Link to="/mine">我的</Link>
            </li>
          </ul> */}

          {_routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}

          {/* {
            <Route
              key={0}
              path={_routes[0].path}
              exact={_routes[0].exact}
              component={_routes[0].component}
            />
          } */}
        </div>

        {/* <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
