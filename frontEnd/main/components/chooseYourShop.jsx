import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const ShopButton = styled.button``;

const ChooseYourShop = ({ shops, setError, setId }) => {
  const getShopInformation = (shopName) => {
    axios
      .post('https://donutshop-api.herokuapp.com/shop-id', {
        name: shopName,
      })
      .then((response) => setId(response.data.id))
      .catch((e) => {
        console.error(e);
        console.log(shopName + ' may be a bad Shop');
        setError(true);
      });
  };

  return shops.map((shop, i) => (
    <ShopButton key={i} onClick={() => getShopInformation(shop)}>
      {shop}
    </ShopButton>
  ));
};

export default ChooseYourShop;
