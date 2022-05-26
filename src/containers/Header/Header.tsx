import React, { FC } from "react";
import { Button, Text } from "../../components";
import { helperList } from "./Header.helper";
import { MetamaskLogo, MainLogo } from "../../assets/icons";
import { HashLink } from 'react-router-hash-link';
import { upDateAddress } from "../../store/user/actions.";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import shortenPhrase from "../../utils/shortenPhrase";
import styles from './styles.module.scss';

declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ethereum: any
    }
}

export const Header: FC = () => {

  const { address } = useSelector((state:RootStateOrAny) => state.user);
  const dispatch = useDispatch();

  const buttonConnect = async () => {
    dispatch(upDateAddress());
  };

  return (
    <div className={styles.header}>
      <div className={styles.mainwWrapper}>
        <img src={MainLogo} alt="Main logo" />
        <nav className={styles.navigationList}>
          <ul>
            {helperList.map((list) => (
              <li key={list.id}>
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
          {address.length ? shortenPhrase(address[0]) : 'Connect Wallet'}
        </Button>
      </div>
    </div>
  );
};