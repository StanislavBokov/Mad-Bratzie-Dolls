import React, { FC } from "react";
import { H3, Button, Text } from "../../components";
import { helperList } from "./Header.helper";
import { MetamaskLogo } from "../../assets/icons";
import { HashLink } from 'react-router-hash-link';
import styles from './styles.module.scss';

declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ethereum: any
    }
}

export const Header: FC = () => {

 
  const buttonConnect = async () => {
    const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(account);
    
  };

  return (
    <div className={styles.header}>
      <H3>Mad Bratzie Dolls</H3>
      <nav className={styles.navigationList}>
        <ul>
          {helperList.map((list) => (
            <li>
              <HashLink
                smooth
                to={list.routes}
                className={styles.navigationItem}
              >
                <Text size="l" weight="regular">{list.title}</Text>
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button 
        icon
        onClick={buttonConnect}
      >
        <img src={MetamaskLogo} alt="Metamask logo" />
        Connect Wallet
      </Button>
    </div>
  );
};