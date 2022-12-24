import './index.css'

const Emoji = props => {
  const {emojiDetails, ontakeFeedback} = props
  const {name, imageUrl} = emojiDetails
  const takeFeedback = () => {
    ontakeFeedback()
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt="img" className="imoji" onClick={takeFeedback} />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
