import React, { useState } from "react";
import { H3, Card, Text, Button } from "../index";
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
        <H3 className={styles.title}>Profile Pic</H3>
        <Card size="sm" className={styles.cardPrice}>
          <Text>Price</Text>
          <div>
            <div className={styles.wrapBNBAmount}>
              <Text>0.5</Text> 
              <Text>BNB</Text>  
            </div>
            <Text>$ 22.03</Text> 
          </div>
          <Text>Quantity</Text>
          <div className={styles.btnWraper}>
            <div className={styles.wrapNumBtn}>
              <div className={styles.btnMinus} onClick={handleClickMinus}>-</div>
              <Text size="l" weight="regular">{quantity > 9 ? quantity : `0${quantity}`}</Text>
              <div className={styles.btnPlus} onClick={handleClickPlus}>+</div>
            </div>
            <Button 
              className={styles.btnMint} size="sm" variant="outlined">MINT</Button>
          </div>
          <div className={styles.maxAllowed}>
            <Text>Max allowed</Text>
            <Text>40 per transaction</Text>
          </div>
        </Card>
      </div>
    </Card>
  );
};