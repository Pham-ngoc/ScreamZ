import {defineStore} from "pinia";

import { Orbis } from '@orbisclub/orbis-sdk'

export const useDarkMode = defineStore('auth', async ()=>{
    const state = reactive({
        orbis: null,
        project: null,
        contexts: [],
        userProfile: null,
        userDetail: null,
        isConnected: true

    })
    const orbis= new Orbis({
        PINATA_GATEWAY: "beige-changing-squirrel-773.mypinata.cloud",
        PINATA_API_KEY: "160f16c829a96b1ca299",
        PINATA_SECRET_API_KEY: "88568421a28b362be7934cef000bfc4eb724b1d17ce3c18e08ee537ff2ccd087"
    })
    let isConnected = await orbis.isConnected();
    if (!isConnected) {
        state.userDetail = await orbis.connect_v2({
            provider: window.phantom?.solana,
            chain: "solana",
            lit: false
        })
    } else {
        state.isConnected = true
        state.userDetail = isConnected
    }
    state.userProfile = orbis.getProfile(state.userDetail.did)
})