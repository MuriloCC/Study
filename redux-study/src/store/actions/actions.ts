interface IDepositAction {
  type: 'DEPOSIT'
  payload: number
}

interface IWithdrawAction {
  type: 'WITHDRAW'
  payload: number
}

interface IBankruptAction {
  type: 'BANKRUPT'
}

export type actionType = IDepositAction | IWithdrawAction | IBankruptAction