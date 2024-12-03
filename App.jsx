import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/UserContext';
import { ThemeProvider } from './components/ThemeProvider';
import { Provider } from 'mobx-react'; // Import Provider from mobx-react
import  {cartStore}  from './components/CartStore'; // Import your cartStore
import { usePopup } from './components/PopupProvider';
import Home from './components/Home';
import Cart  from './components/Cart';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';
import LoginCard from './components/LoginCard';
import UserOptions from './components/UserOptions';
import PizzaHutMenu from './components/PizzaHutMenu';
import McDonaldsMenu from './components/McDonaldsMenu';
import JapanikaMenu from './components/JapanikaMenu';
import GoldaMenu from './components/GoldaMenu';
import VivinoMenu from './components/VivinoMenu';
import CatenaZapataMenu from './components/CatenaZapataMenu';
import { Store } from './components/Store';
import Popup from './components/Popup';

const App = () => {
  const { visible } = usePopup();

  const [user, setUser] = useState(null);

  const loginUser = (email, password, firstName, lastName) => {
    const userInfo = { email, password, firstName, lastName };
    setUser(userInfo);
    return userInfo;
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <div className="wrapper">
      <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        <Provider cartStore={cartStore}> {/* Wrap with MobX Provider */}
          <Router>
            <ThemeProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="store" element={<Store />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="pizzaHut" element={<PizzaHutMenu />} />
                  <Route path="mcDonalds" element={<McDonaldsMenu />} />
                  <Route path="japanika" element={<JapanikaMenu />} />
                  <Route path="golda" element={<GoldaMenu />} />
                  <Route path="vivino" element={<VivinoMenu />} />
                  <Route path="catenaZapata" element={<CatenaZapataMenu />} />
                  <Route path="loginCard" element={<LoginCard />} />
                  <Route path="userOptions" element={<UserOptions />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </Router>
          {visible && <Popup />}
        </Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
