import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiCommentDots } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import useChatStore from '../../chat/stores/ChatStores';
import PlayerItem from './PlayerItem';

// interface InfoTypes {
//     count: number
//     pages: number
//     next: string
//     prev: string
// }

// interface ResultTypes {
//     id: number
//     name: string
//     image: string
// }

// interface DataTypes {
//     info: InfoTypes
//     results: Array<ResultTypes>
// }

function Home() {
  const changeToggleChatList = useChatStore((state) => state.changeChatListToggle);

  const { data, status } = useQuery(['list'], async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character/?page=20');
    return res.json();
  });

  if (status === 'loading') {
    return (<div>Loading ..</div>);
  }
  console.log(data);

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="flex flex-col justify-between items-center flex-none w-16 p-4 bg-gray-200">
        <div className="flex flex-col space-y-4">
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
          <a href="/#">
            <div className="rounded-full bg-gray-400 w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="w-64 p-4 bg-gray-100 flex flex-col flex-none space-y-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-semibold text-2xl">Games</h1>
          <FaSearch className="flex-none" />
        </div>
        <div className="flex-auto overflow-y-auto">
          {(() => {
            const gameList = [];
            for (let i = 1; i <= 50; i += 1) {
              gameList.push(
                <a href="/#" className="block border-b" key={i}>
                  <div className="border-l-2 border-blue-500 p-2">
                    PUBEG MOBEL
                  </div>
                </a>,
              );
            }
            return gameList;
          })()}
        </div>
      </div>
      <div className="main-content flex-auto flex flex-col bg-white">
        <div className="bg-red-200 flex-none border-l shadow-l">
          <div className="flex justify-between items-center h-16">
            <div>
              Beranda
            </div>
            <div className="nav-right p-4 flex items-center space-x-4">
              <a href="/#">A</a>
              <a href="/#">A</a>
              <a href="/#" onClick={() => changeToggleChatList()}>
                <BiCommentDots className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-auto overflow-y-auto">
          <div className="w-4/5 border-l border-r border-gray-400">
            <div className="flex-auto overflow-y-auto">
              <PlayerItem data={data} />
            </div>
          </div>
          <div className="w-1/5">right</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
