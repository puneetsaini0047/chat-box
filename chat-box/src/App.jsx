import Chatboticon from './components/Chatboticon';
import Chatform from './components/Chatform';

const App = () => {
  return (
    <div className="contaier">
      <div className="chat-popup">
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <Chatboticon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="chat-footer">
            <Chatform/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App