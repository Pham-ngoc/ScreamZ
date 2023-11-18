
import { defineStore } from 'pinia';
import { EmojiButton } from '@joeattardi/emoji-button';


export const useDarkMode = defineStore('darkMode', {

    state: () => ({ 
        darkMode: localStorage.getItem('darkMode') === 'true' || false,

    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.setThemeClass();
        },
        setDarkMode(value) {
            window.localStorage.setItem('darkMode', value);
            this.darkMode = value;
            this.setThemeClass();
        },
        setThemeClass() {
            if (this.darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            localStorage.setItem('darkMode', this.darkMode);
        }

    },
    getters: {
        getDarkMode() {
            return this.darkMode;
        }
    }
});