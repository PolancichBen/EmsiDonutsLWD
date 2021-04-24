import React from 'react';
import styled from 'styled-components';

const Donut = styled.div``;

const DonutName = styled.div``;

const DonutPrice = styled.div``;

const DonutQty = styled.div``;

const ShopLandingPage = ({ inventory, setError, changingShops }) => {
  console.log(inventory);
  return inventory.map((inventoryItem, i) => (
    <Donut key={i}>
      <DonutName>{inventoryItem.type}</DonutName>
      <DonutPrice>{inventoryItem.price}</DonutPrice>
      <DonutQty>{inventoryItem.count}</DonutQty>
    </Donut>
  ));
};

export default ShopLandingPage;
