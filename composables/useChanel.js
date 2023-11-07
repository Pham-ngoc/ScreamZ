import {defineStore} from "pinia";


export const useChanel = defineStore('chanel', {

    state: () => ({
        conversations: [
            {
                name: 'John Doe',
            },{
                name: 'cc',
            }
        ],
    }),
    actions: {

    },
    getters: {
        getConversations() {
            return this.conversations;
        }
    }
})