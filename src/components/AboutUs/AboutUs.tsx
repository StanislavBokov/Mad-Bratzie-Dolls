import React from 'react';

import { H1, H2, Text, Card } from '../index';
import { aboutUsHelper } from './AboutUs.helper';
import styles from './styles.module.scss';


export const AboutUs: React.FC = () => {
  return (
    <>
      <H1 align="center" className={styles.mainTitle}>About us</H1>
      <div className={styles.wrapperCard}>
        {aboutUsHelper.map((card) => (
          <Card className={styles.cardItem} key={card.id}>
            <H2 className={styles.title} weight="semiBold">{card.title}</H2>
            <Text size="l" className={styles.description} noWrap={false} weight="light">{card.description}</Text>
          </Card>
        ))}
      </div>
    </>
  );
};
