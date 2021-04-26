import React, { useState } from 'react';
import styled from 'styled-components';

const ShopHeading = styled.h1``;

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListHeader = styled.h2``;

const DonutOption = styled.tr``;

const DonutName = styled.td``;

const DonutPrice = styled.td``;

const DonutQty = styled.td``;

const OrderButtonWrapper = styled.td``;

const OrderButton = styled.button``;

const StyledTable = styled.table``;

const ModalBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalCardBody = styled.div`
  width: 60%;
  height: 80%;
`;

const ShopLandingPage = ({ inventory, setError, shopInfo, changingShops }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {isModalOpen && (
        <ModalBackground>
          <ModalCardBody>Test</ModalCardBody>
        </ModalBackground>
      )}
      <ShopHeading>Welcome to {shopInfo.shopName}</ShopHeading>
      <ListBody>
        <ListHeader>Take a Look at our Inventory</ListHeader>
        <StyledTable>
          <thead>
            <tr>
              <th>Donuts</th>
              <th>Amount in Stock</th>
              <th>Price</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((inventoryItem, i) => (
              <DonutOption key={i}>
                <DonutName>{inventoryItem.type}</DonutName>
                <DonutQty>{inventoryItem.count}</DonutQty>
                <DonutPrice>{inventoryItem.price}</DonutPrice>
                <OrderButtonWrapper>
                  <OrderButton
                    onClick={() => {
                      console.log('fire');
                      setIsModalOpen(true);
                    }}
                  >
                    Order
                  </OrderButton>
                </OrderButtonWrapper>
              </DonutOption>
            ))}
          </tbody>
        </StyledTable>
      </ListBody>
    </div>
  );
};

export default ShopLandingPage;
