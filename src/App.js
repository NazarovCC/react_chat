import React, {useState} from 'react';
import './App.css';
import './actionMessage.css'


//https://vk.com/images/camera_200.png

function App() {
  const [messages, setMassages] = useState([
    {
      id: 1,
      avatar:
        'https://sun9-north.userapi.com/sun9-78/s/v1/if1/7Y5CLWNd8yHOJGhyuZQmvN5B_1WFp66ioTc946ImtLyPXj8LVyv3OdinUTbFQuWfIXaLODl1.jpg?size=807x1080&quality=96&type=album',
      user: 'Vasia Pupkin',
      textMessage: 'kjkjkjkjkjkjhghhhhhhhhhhhhhhhhhhhhhhhhhh',
      dateMessage: '14:44',
    },
    {
      id: 2,
      avatar:
        'https://sun9-north.userapi.com/sun9-78/s/v1/if1/7Y5CLWNd8yHOJGhyuZQmvN5B_1WFp66ioTc946ImtLyPXj8LVyv3OdinUTbFQuWfIXaLODl1.jpg?size=807x1080&quality=96&type=album',
      user: 'Vasia Pupkin',
      textMessage: 'kjkjkjkjkjkjhghhhhhhhhhhhhhhhhhhhhhhhhhh',
      dateMessage: '14:44',
    },
    {
      id: 3,
      avatar:
        'https://sun9-north.userapi.com/sun9-78/s/v1/if1/7Y5CLWNd8yHOJGhyuZQmvN5B_1WFp66ioTc946ImtLyPXj8LVyv3OdinUTbFQuWfIXaLODl1.jpg?size=807x1080&quality=96&type=album',
      user: 'Vasia Pupkin',
      textMessage: 'kjkjkjkjkjkjhghhhhhhhhhhhhhhhhhhhhhhhhhh',
      dateMessage: '14:44',
    },
    {
      id: 4,
      avatar:
        'https://sun9-north.userapi.com/sun9-78/s/v1/if1/7Y5CLWNd8yHOJGhyuZQmvN5B_1WFp66ioTc946ImtLyPXj8LVyv3OdinUTbFQuWfIXaLODl1.jpg?size=807x1080&quality=96&type=album',
      user: 'Vasia Pupkin',
      textMessage: 'kjkjkjkjkjkjhghhhhhhhhhhhhhhhhhhhhhhhhhh',
      dateMessage: '14:44',
    },
    {
      id: 5,
      user: 'Vasia Pupkin',
      textMessage: 'kjkjkjkjkjkjhghhhhhhhhhhhhhhhhhhhhhhhhhh',
      dateMessage: '14:44',
    },
  ]);
  return (
    <div className="App">
      <h1 className="app_header">Чатик</h1>
      <div className="messages">
        <div className="messages_body">
          {
            messages.map(message => {
              return (
                <div className="messages_one_message">
                  <div className="messages_one_message_user">
                    <div
                      className="messages_one_message_user_avatar"
                      style={{
                        'background-image': `url(${
                          message.avatar ??
                          'https://vk.com/images/camera_200.png'
                        })`,
                      }}
                    ></div>
                    <div className="messages_one_message_user_sendor">
                      {message.user}
                    </div>
                  </div>

                  <div className="messages_one_message_text">
                    {message.textMessage}
                  </div>
                  <div className="messages_one_message_data">
                    {message.dateMessage}
                  </div>
                </div>
              );
            }

            )
          }
        </div>
      </div>
      <div className='actionMessage'>
         <input type="text" />
         <button>Отправить</button>
      </div>
    </div>
  );
}

export default App;
