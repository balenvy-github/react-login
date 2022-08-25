import React from 'react';
import { BiMessageAlt } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import useChatStore from '../stores/ChatStores';

function ChatList() {
  const toggleChatList = useChatStore((state) => state.chatList);
  const changeToggleChatList = useChatStore((state) => state.changeChatListToggle);
  const changeToggleChatting = useChatStore((state) => state.changeToggleChatting);
  const newChatToggle = useChatStore((state) => state.changeNewChatToggle);

  return (
    <div className={`chat flex flex-col bg-white border-solid border-1 border-gray-500 fixed bottom-0 
      right-10 shadow-2xl w-96 h-1/2 transition-[max-height] 
      ease-in-out delay-150 duration-300 ${toggleChatList ? 'max-h-full' : 'max-h-16'}`}
    >
      <div
        className="chat-header flex-none h-16 flex justify-between items-center p-4 border-2 cursor-pointer"
        onClick={() => changeToggleChatList()}
        role="presentation"
      >
        <h3 className="font-semibold text-xl">Chat</h3>
        <div className="chat-header-left flex items-center space-x-2">
          <BiMessageAlt size="24" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); newChatToggle(); }} />
          <FaTimes size="24" className="cursor-pointer" />
        </div>
      </div>
      <div className="chat-body overflow-y-auto pb-10">
        <div className="chat-item px-4 py-3 flex items-center cursor-pointer" role="presentation" onClick={() => changeToggleChatting()}>
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center cursor-pointer" role="presentation" onClick={() => changeToggleChatting()}>
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
        <div className="chat-item px-4 py-3 flex items-center">
          <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
          <div className="chat-text">
            <h4 className="text-base">
              Ahn Yujin
              <span className="text-gray-500 text-sm"> · 3 Aug 2022</span>
            </h4>
            <h5 className="text-sm text-gray-500">Lorem ipsum dolor, sit amet ..</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
