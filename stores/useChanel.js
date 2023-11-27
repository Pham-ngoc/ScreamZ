import {defineStore} from "pinia";


export const useChanel = defineStore('chanel', {

    state: () => ({
        conversations:
            [
                {
                    name: 'General',
                },
                {
                    name: 'Conversation 2',
                }
            ],



    }),
    actions: {},
    getters: {
        getConversations() {
            return this.conversations;
        }
    }
})