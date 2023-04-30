import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdrawal} = props

  const {value} = denominationDetails

  const onWithdraw = () => {
    onWithdrawal(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
