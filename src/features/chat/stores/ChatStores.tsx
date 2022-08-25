import create from 'zustand';

interface ChatState {
    chatting: boolean
    newChatToggle: boolean
    chatList: boolean
    changeToggleChatting: () => void
    changeNewChatToggle: () => void
    changeChatListToggle: () => void
}

const useChatStore = create<ChatState>((set) => ({
  chatting: false,
  newChatToggle: false,
  chatList: false,
  changeToggleChatting: () => set((state) => ({ chatting: !state.chatting })),
  changeNewChatToggle: () => set((state) => ({ newChatToggle: !state.newChatToggle })),
  changeChatListToggle: () => set((state) => ({ chatList: !state.chatList })),
}));

export default useChatStore;
