import "./App.css";
import { useRef, useState } from "react";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Suspense } from "react";
function App() {
  const cartIinitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const categoryRef = useRef(null);
  const [cartItems, setCartItems] = useState(cartIinitialState);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading..</h1>}>
            <Routes location={location}>
              {appRoutes.map((route) => {
                if (route.requiresAuth && !isLogged) {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={<Navigate replace to={"/login"} />}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={
                        <route.component
                          categoryRef={categoryRef}
                          _cartItems={cartItems}
                          setCartItems={setCartItems}
                          setUser={setUser}
                          setIsLogged={setIsLogged}
                          user={user}
                        />
                      }
                    />
                  );
                }
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
