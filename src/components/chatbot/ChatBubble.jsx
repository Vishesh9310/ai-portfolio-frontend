// ⃣AI Chatbot with Your Persona
// Integrate a chat bubble (bottom-left) that opens into a chat window powered by AI.
// The chatbot should:
// - Represent your tone, style, and personality.
// - Answer questions about your projects, background, skills, and interests.
// - Be powered by OpenAI, Gemini, or any AI model you prefer.
// - Maintain chat history and handle context effectively.
// 💬 Why this section?
// It shows your creativity and how well you can integrate AI meaningfully — not as a gimmick,
// but as an extension of your personality and coding ability.


import React from 'react'
import { Link } from 'react-router-dom'
import Chatbot from '../../assets/icons/chatbot.png'

const ChatBubble = () => {
  return (
    <Link to='/chatbot' className='fixed bottom-6 right-6 z-50 w-fit h-fit rounded-full'>
        <img src={Chatbot} alt="chatbot" className='w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300' />
    </Link>
  )
}

export default ChatBubble