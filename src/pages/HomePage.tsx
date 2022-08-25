import React from 'react';
import AddNewChat from '../features/chat/components/AddNewChat';
import ChatList from '../features/chat/components/ChatList';
import Chatting from '../features/chat/components/Chatting';
import Home from '../features/home/components/Home';

function HomePage() {
  return (
    <>
      <Home />
      <ChatList />
      <Chatting />
      <AddNewChat />
    </>
  );
}

export default HomePage;
