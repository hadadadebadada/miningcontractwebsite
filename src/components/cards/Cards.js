import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import styled from 'styled-components'

const Div1 = styled.div`
    padding: 4rem;
    display: flex;
  background-color: #101522;
 
`;
const Div2 = styled.div`

    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

  background-color: #101522;
 
`;
const Div3 = styled.div`
    position: relative;
    width: 100%;
    border-radius: 25px;

  background-color:  #101522;
 
`;




function Cards() {
  return (
<div
      style={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px;',
        height: '100%',
        width: '100%',
        backgroundColor: "#101522"
      }}
    >
    
     
        <Div3 className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem


              src='images/bit.svg'
              text='25MH/s for 1000$'
            
              label='BTC'
              path='/services'
            />
            <CardItem
              src='images/eth.svg'
              text='25MH/s for 1000$'
              label='ETH'
              path='/products'
            />
            <CardItem
              src='images/doge.svg'
              text='25MH/s for 1000$'
              label='DOGE'
              path='/sign-up'
            />
          </ul>
          
          
        </Div3>
     
    </div>
    
  );
}

export default Cards;