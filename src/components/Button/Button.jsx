import { useState } from 'react';
import './Button.css';
import { useCMS } from '../../cms/ContentContext';
import { Icon, ImageField, Text } from '../../cms/Editable';

const Button = () => {
  const { get } = useCMS();
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const sendMessage = () => {
    const message = draft.trim();
    if (message === '') return;

    setMessages([...messages, { user: get('chat.userLabel') || 'Tú', text: message }]);
    setDraft('');

    const phoneNumber = get('chat.phone');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="toggle-switch">
        <div id="whatsapp" className="whatsapp toggle-button" onClick={toggleChat}>
          <Icon name="whatsapp" size={16} />
        </div>
      </div>
      {chatVisible && (
        <div className="chat-box" id="chat-box">
          <div className="chat-header">
            <span className="close-button" onClick={toggleChat}>
              ×
            </span>
            <div className="content">
              <div className="container-image">
                <ImageField path="chat.logo" alt={get('chat.logoAlt')} />
              </div>
              <div className="texts">
                <Text path="chat.title" as="h4" />
                <Text path="chat.status" as="span" />
              </div>
            </div>
          </div>
          <div className="chat-messages" id="chat-messages">
            <div className="message">
              <Text path="chat.greeting" as="span" />
              <Text path="chat.greetingBold" as="span" className="bold" />
            </div>
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              id="chat-input"
              placeholder={get('chat.placeholder')}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') sendMessage();
              }}
            />
            <button onClick={sendMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
