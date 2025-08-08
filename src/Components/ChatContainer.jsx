import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/* {header} */}
      <div className='flex items-center gap-3 py-4 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className='md:hidden w-7 cursor-pointer'
        />
        <img
          src={assets.help_icon} alt="" className='max-md:hidden w-5'
        />
      </div>

      {/* {chatarea} */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
       {messagesDummyData.map((msg, index) => {
  const isOwn = msg.senderId === '680f5116f10f3cd28382ed02';

  return (
    <div
      key={index}
      className={`flex items-end gap-2 ${isOwn ? 'justify-end' : 'justify-start'}`}
    >
      {/* Avatar left if not own */}
      {!isOwn && (
        <img
          src={assets.profile_martin}
          alt=""
          className='w-7 rounded-full'
        />
      )}

      {/* Message content */}
      {msg.image ? (
        <img
          src={msg.image}
          alt=""
          className='max-w-[230px] border border-gray-300'
        />
      ) : (
        <p
          className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
            isOwn ? 'rounded-br-none' : 'rounded-bl-none'
          }`}
        >
          {msg.text}
        </p>
      )}

      {/* Avatar right if own */}
      {isOwn && (
        <img
          src={assets.avatar_icon}
          alt=""
          className='w-7 rounded-full'
        />
      )}
      <div>  <p className='text-gray-500 text-xs justify-center'>{msg.createdAt}</p></div>
    
    </div>
  );
})}

      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden h-full'>
      <img src={assets.logo_icon} className='w-16' alt="" />
      <p className='text-lg font-medium text-white'>chat bro .</p>
    </div>
  )
}

export default ChatContainer
