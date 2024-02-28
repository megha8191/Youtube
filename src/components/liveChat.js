import React, { useEffect, useState } from 'react';
import LiveMsg from './liveMsg';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, removeMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomSentence } from '../utils/helper';

const LiveChat = () => {
  const [chatshow, setChatshow] = useState(true);
  const dispatch = useDispatch();
  const msgs = useSelector((store) => store.livechat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(removeMessage())

      dispatch(addMessage({
        "name": generateRandomName(),
        "msg": generateRandomSentence()
      }));
    }, 3000);
    return () => clearInterval(timer)
  }, []);

  const [enableSubmit, SetEnableSubmit] = useState(false);
  const [liveInputmsg, SetLiveInputmsg] = useState(false);

  const addInputMsg = () => {
    dispatch(addMessage({
      "name":"user",
      "msg" : liveInputmsg
    }))
    SetLiveInputmsg('')
    document.getElementById('live-msg-input').value = " "
    SetEnableSubmit(false)
  }

  return (
    <div className='livechat border border-gray-200 rounded-lg'>
      {chatshow ? (
        <div className=''>
          <div className='border-b py-3 px-4 border-b-gray-200 flex justify-between'>
            <p className=''>Top Chat</p>
          </div>
          <div className='px-4 py-1 h-96 overflow-y-auto d-flex flex-col-reverse flex' id="livechat">
            {(msgs) ? (msgs.map(function (mesage, index) {
              return <LiveMsg name={mesage.name} msg={mesage.msg} key={"message" + index} />
            })) : <LiveMsg name={msgs[0].name} msg={msgs[0].msg} />
            }
          </div>
          <div className='border-y border-gray-100 py-3 px-4 flex gap-3' onChange={(e) => {
            // console.log(e.target.val)
            if (e.target.value.trim() !== "") {
              SetEnableSubmit(true)
              SetLiveInputmsg(e.target.value)
            }
            else {
              SetEnableSubmit(false)
            }
          }
          }>
            <input placeholder='Chat...' id="live-msg-input" onKeyDown={(e) => { if (e.key === 'Enter' && enableSubmit) {
              addInputMsg();
            }} }
            className='py-2 px-4 rounded-full bg-gray-100 border-gray-200 focus:outline-none w-full block' />
            {(enableSubmit) ? (<button className='border-none outline-none' onClick={()=>addInputMsg()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>) : ""}
          </div>
        </div>

      ) : ""}
      <div className='p-2'>
        <button
          className='max-w-full py-2 px-2 w-full bg-white hover:bg-gray-200 text-center rounded-full'
          onClick={() => {
            setChatshow(!chatshow);
          }}
        >
          {chatshow ? 'Hide Chat' : 'Show Chat'}
        </button>
      </div>

    </div>
  );
};

export default LiveChat;
