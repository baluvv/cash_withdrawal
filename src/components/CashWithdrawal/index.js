import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {currentAmount: 2000}

  onWithdrawal = value => {
    this.setState(prevState => ({
      currentAmount: prevState.currentAmount - value,
    }))
  }

  render() {
    const {currentAmount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="profile-container">
          <div className="name-container">
            <div className="name-letter">s</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance">
              <p className="amount">{currentAmount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="name">Withdraw</p>
            <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="amount-select-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                onWithdrawal={this.onWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
