import React from 'react'
import { Bot} from 'lucide-react'
import { toast } from 'react-toastify'

const ChatBot = () => {

    const toggle_mode=()=>{
        toast.error("This feature is under development!")

    }

  return (
    <div>
        <button onClick={toggle_mode} className="fixed bottom-16 right-6 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all">
            <Bot className='text-white' size={41} strokeWidth={2}/>
        </button>
    </div>
  )
}

export default ChatBot;