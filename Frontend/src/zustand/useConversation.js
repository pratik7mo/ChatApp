import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null, // Corrected typo here
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [], // Changed to `messages` for consistency
  setMessage: (messages) => set({ messages }),
}));

export default useConversation;
