import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {selected: false}

  change = () => this.setState({selected: true})

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {selected} = this.state
    return (
      <div className="bg">
        <div className="card">
          {selected === false ? (
            <div className="card">
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul>
                {emojis.map(each => (
                  <li onClick={this.change} type="button">
                    <img src={each.imageUrl} alt={each.name} />
                    <p>{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="card">
              <img src={loveEmojiUrl} alt="love emoji" />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
