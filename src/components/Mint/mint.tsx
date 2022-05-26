import React, { useState } from "react";
import { H2, H3, Card, Text, Button } from "../index";
import { arrayOfDolls } from "../../assets/img";
import styles from './styles.module.scss';

export const Mint:React.FC = () => {
  const [indexDoll, setIndexDoll] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // setTimeout(() => {
  //   if(indexDoll === arrayOfDolls.length -1) {
  //     setIndexDoll(0);
  //   } else {
  //     setIndexDoll(indexDoll + 1);
  //   }
  // },500);
  
  
  const handleClickMinus = () => {
    if(quantity > 1) {
      setQuantity(prevState => prevState - 1);
    }
   
  };
  const handleClickPlus = () => {
    if(quantity < 40) {
      setQuantity(prevState => prevState + 1);
    }
  };
  return (
    <Card className={styles.Mint}>
      <img src={arrayOfDolls[indexDoll]} alt="" className={styles.imgDoll}/>    
      <div className={styles.profilePic}>
        <H2 className={styles.title}>Profile Pic</H2>
        <Card size="sm" className={styles.cardPrice} colorBG="light">
          <Text color="black" size="exl">Price</Text>
          <div className={styles.amountETH}>
            <H3 color="pink" weight="bold">0.002 ETH</H3> 
            <Text color="black">$ 22.03</Text> 
          </div>
          <Text color="black" size="exl">Quantity</Text>
          <div className={styles.btnWraper}>
            <div className={styles.wrapNumBtn}>
              <div className={styles.btnMinus} onClick={handleClickMinus}>-</div>
              <Text size="l" color="black" weight="regular">{quantity > 9 ? quantity : `0${quantity}`}</Text>
              <div className={styles.btnPlus} onClick={handleClickPlus}>+</div>
            </div>
            <Button 
              className={styles.btnMint} size="sm">Mint</Button>
          </div>
          <Text color="black" size="l" weight="light">Max allowed 40 per transaction</Text>
        </Card>
      </div>
    </Card>
  );
};