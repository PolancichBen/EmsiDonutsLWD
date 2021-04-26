import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import axios from 'axios';
import styled from 'styled-components';

import ShopLandingPage from './components/shopLandingPage.jsx';
import ChooseYourShop from './components/chooseYourShop.jsx';

const Main = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(false);
  const [shopInfo, setShopInfo] = useState({});
  const [inventory, setInventory] = useState([]);
  const [changingShops, setChangingShops] = useState(false);

  useEffect(() => {
    axios
      .get('https://donutshop-api.herokuapp.com/shops')
      .then((response) => setShops(response.data))
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, []);

  useEffect(() => {
    (async () => {
      if (typeof shopInfo.id === 'number') {
        await axios
          .get(
            `https://donutshop-api.herokuapp.com/inventory?id=${shopInfo.id}`
          )
          .then((response) => setInventory(response.data.donuts))
          .catch((e) => {
            console.error(e);
            setError(true);
          });
      }
    })();
  }, [shopInfo.id]);

  if (error) {
    return 'Error, Check Console';
  }
  if (!shops.length) {
    return 'Loading...';
  } else if (!changingShops && inventory.length) {
    return (
      <ShopLandingPage
        inventory={inventory}
        setError={setError}
        shopInfo={shopInfo}
        changingShops={setChangingShops}
      />
    );
  } else {
    return (
      <ChooseYourShop
        setShopInfo={setShopInfo}
        setError={setError}
        shops={shops}
      />
    );
  }
};

export default Main;
