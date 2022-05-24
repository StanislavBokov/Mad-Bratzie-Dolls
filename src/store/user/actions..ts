import { createAction } from '@reduxjs/toolkit';
import actionTypes from './actionTypes';

export const upDateAddress = createAction(actionTypes.UPDATE_ADDRESS);