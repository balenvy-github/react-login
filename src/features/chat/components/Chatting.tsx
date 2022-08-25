import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiPlayButton } from 'react-icons/gi';
import useChatStore from '../stores/ChatStores';

function Chatting() {
  const toggleChatting = useChatStore((state) => state.chatting);
  const changeToggleChatting = useChatStore((state) => state.changeToggleChatting);

  const listRef: any = useRef();
  useEffect(() => {
    listRef.current.scrollTo(0, listRef.current.scrollHeight, 'auto');
  }, [toggleChatting]);

  return (
    <div className={`chatting flex flex-col bg-gray-700 text-white border-solid border-1 border-gray-500 fixed bottom-0 
    right-10 shadow-2xl w-96 h-1/2 ${toggleChatting ? 'max-h-full' : 'max-h-0'}`}
    >
      <div
        className="chatting-header flex-none h-16 flex justify-between items-center p-4 border-b cursor-pointer"
        // onClick={() => setIsChatOpen(!isChatOpen)}
        role="presentation"
      >
        <div className="chatting-receiver flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chatting-receiver-name">
            <h3 className="font-semibold text-xl">Annyudings</h3>
            <h5 className="text-sm text-green-400">Online</h5>
          </div>
        </div>
        <div className="chat-header-left flex items-center space-x-2">
          <FaTimes size="24" className="cursor-pointer" onClick={() => changeToggleChatting()} />
        </div>
      </div>
      <div className="chatting-body flex flex-col justify-between relative h-full bg-gray-900">
        <div className="chatting-body-top flex flex-col overflow-y-auto h-full" ref={listRef}>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-right self-end w-2/3 mx-4 mt-4 text-right">
            <div className=" bg-blue-400 p-2 text-left">
              Lorem ipsum dolor
            </div>
            <span className="text-xs">5 Aug 2022 11.01 WITA</span>
          </div>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-left self-start w-2/3 mx-4 mt-4">
            <div className=" bg-green-400 p-2">
              Lorem ipsum123 orem ipsum dolor sit amet consectetur adipisicing
            </div>
            <span className="text-xs">5 Aug 2022 11.00 WITA</span>
          </div>
          <div className="chatting-text-right self-end w-2/3 mx-4 mt-4 text-right">
            <div className=" bg-blue-400 p-2 text-left">
              Lorem ipsum dolor
            </div>
            <span className="text-xs">5 Aug 2022 11.01 WITA</span>
          </div>
        </div>

        <div className="chatting-body-bottom mb-16 text-black bg-gray-900 border-b-2 border-b-red-700 p-2 flex flex-none items-center justify-between">
          <input type="text" placeholder="Say somethin .." className="p-1 w-11/12" />
          <button type="button">
            <GiPlayButton size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatting;
