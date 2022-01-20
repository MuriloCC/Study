import { Dispatch } from "@reduxjs/toolkit"
import { actionType } from "../actions/actions"

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: 'BANKRUPT',
    })
  }
}