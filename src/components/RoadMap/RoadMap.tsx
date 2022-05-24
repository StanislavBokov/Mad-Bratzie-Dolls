import React from "react";
import { H1, H3, Card, Text } from "../index";
import { roadMapHelper } from "./RoadMap.helper";
import styles from './styles.module.scss';

export const RoadMap: React.FC = () => {
  return (
    <div className={styles.RoadMap} id="roadMap">
      <H1 align="center" className={styles.mainTitle}>Road Map</H1>
      <div className={styles.roadWraper}>
        {roadMapHelper.map(({ id, title, description }) => (
          <Card className={styles.areas} key={id}>
            <H3 className={styles.titleCard}>{title}</H3>
            <Text noWrap={false}>{description}</Text>
          </Card> 
        ))}
        <div className={styles.wrapNumber}>
          {roadMapHelper.map(({ id }) => (
            <>    
              <div className={styles.divider} />
              <div className={styles.num}>{id}</div>
              <div className={styles.divider} />
            </>
          ))}
        </div>
      </div>    
    </div>
  );
};