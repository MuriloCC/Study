import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './store';

function App() {
  const dispatch = useDispatch()
  const amount = useSelector((state: any) => state.bank)

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(900)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </>
  );
}

export default App;
