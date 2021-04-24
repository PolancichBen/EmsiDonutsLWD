import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ShopLandingPage from './components/shopLandingPage.jsx';
import ChooseYourShop from './components/chooseYourShop.jsx';

const Main = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [changingShops, setChangingShops] = useState(false);

  useEffect(() => {
    console.log('fire');
    axios
      .get('https://donutshop-api.herokuapp.com/shops')
      .then((response) => setShops(response.data))
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (typeof id === 'number') {
      axios
        .get(`https://donutshop-api.herokuapp.com/inventory?id=${id}`)
        .then((response) => setInventory(response.data.donuts))
        .catch((e) => {
          console.error(e);
          setError(true);
        });
    }
  }, [id]);

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
        changingShops={setChangingShops}
      />
    );
  } else {
    return <ChooseYourShop setId={setId} setError={setError} shops={shops} />;
  }
};

export default Main;
