
import { defineStore } from 'pinia';
export const userContainer = defineStore('messageText', ()=> {
    const messages =ref([])
    const isUserChatFriend = ref(false)
    return {
        messages,
        isUserChatFriend,
    }
});