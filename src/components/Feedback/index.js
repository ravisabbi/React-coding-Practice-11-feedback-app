// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'

class Feedback extends Component {
  state = {isFeedbackGiven: true}

  ontakeFeedback = () => {
    this.setState({isFeedbackGiven: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackGiven} = this.state

    console.log(resources)
    return (
      <div className="app-container">
        {isFeedbackGiven === true ? (
          <div className="feedback-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachEmoji => (
                <Emoji
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  ontakeFeedback={this.ontakeFeedback}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-container">
            <img src={loveEmojiUrl} alt="loveEmoji" className="love-image" />
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="customer-support">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
