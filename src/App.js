import { useState } from 'react'
import styled from 'styled-components'
import ContactListComponent from './components/ContactListComponent'
import ConversationComponent from './components/ConversationComponent'

const Container = styled.div`
   display: flex;
   height: 100vh;
   width: 100%;
   flex-direction: row;
   align-items: center;
   background: #f8f9fb;
`

const ChatPlaceholder = styled.img`
   width: 240px;
   height: 240px;
   border-radius: 50%;
   object-fit: contain;
`
const Placeholder = styled.div`
   flex: 3;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   gap: 10px;
   color: rgba(0, 0, 0, 0.45);

   span {
      font-size: 32px;
      color: #525252;
   }
`

function App() {
   const [selectedChat, setChat] = useState()
   return (
      <Container>
         <ContactListComponent setChat={setChat} />
         {selectedChat ? (
            <ConversationComponent selectedChat={selectedChat} />
         ) : (
            <Placeholder>
               <ChatPlaceholder src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRh8B-_HZeMbSOIlTPm1AuwxFcuz2ZVpXa-0QrE_rE-IMywwfgG' />
               <span>Keep your phone connected</span>
               <p>
                  Whatsapp connects to your phone to sync messages. To reduce
                  data usage connect your phone to Wi-Fi.
               </p>
            </Placeholder>
         )}
      </Container>
   )
}

export default App
