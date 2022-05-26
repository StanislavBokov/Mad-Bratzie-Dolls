import React from 'react';

import { H2, H4, Text, Card } from '../index';
import { aboutUsHelper } from './AboutUs.helper';
import styles from './styles.module.scss';


export const AboutUs: React.FC = () => {
  return (
    <div id="about">
      <H2 align="center" className={styles.mainTitle}>About our NFT’s</H2>
      <div className={styles.wrapperCard}>
        {aboutUsHelper.map((card) => (
          <Card className={styles.cardItem} key={card.id} colorBG="light" size="sm">
            <H4 className={styles.title} weight="semiBold" color="black">{card.title}</H4>
            <Text  className={styles.description} noWrap={false} color="black">{card.description}</Text>
            <img src={card.img} alt="" className={styles.dollImg}/>
          </Card>
        ))}
      </div>
    </div>
  );
};
