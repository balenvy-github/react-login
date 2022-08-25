import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import useChatStore from '../stores/ChatStores';

Modal.setAppElement('#root');

function AddNewChat() {
  const toggleNewChat = useChatStore((state) => state.newChatToggle);
  const changeToggleNewChat = useChatStore((state) => state.changeNewChatToggle);
  return (
    <div className="modal-new-chat">
      <Modal
        isOpen={toggleNewChat}
        onRequestClose={() => changeToggleNewChat()}
        className="bg-white max-w-2xl w-[580px] max-h-max h-[600px] shadow-2xl"
        overlayClassName="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black/75"
      >
        <div className="flex flex-col h-full">
          <div className="modal-new-chat-header flex flex-none items-center space-x-2 p-4">
            <FaTimes size="24" className="cursor-pointer" onClick={() => changeToggleNewChat()} />
            <h4 className="text-xl font-semibold">Add New Chat</h4>
          </div>
          <div className="modal-new-chat-search flex-none px-4 pb-4 border-b border-gray-500">
            <input type="text" placeholder="Search urmom" className="placeholder-black focus:outline-none ml-1" />
          </div>
          <div className="modal-new-chat-body overflow-y-auto">
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
            <div className="chat-item px-4 py-3 flex items-center">
              <div className="rounded-full bg-gray-400 w-12 h-12 mr-3" />
              <div className="chat-text">
                <h4 className="text-base">
                  Ahn Yujin
                </h4>
                <h5 className="text-sm text-gray-500">Online</h5>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewChat;
