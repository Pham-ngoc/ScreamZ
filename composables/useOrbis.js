import {defineStore} from "pinia";

import {Orbis} from '@orbisclub/orbis-sdk'

export const useOrbis = defineStore('orbis',   () => {

    //state
    const isLogin = ref(false);
    const did = ref("");
    const contexts = ref([]);
    const orbis = new Orbis({
        PINATA_GATEWAY: "beige-changing-squirrel-773.mypinata.cloud",
        PINATA_API_KEY: "160f16c829a96b1ca299",
        PINATA_SECRET_API_KEY: "88568421a28b362be7934cef000bfc4eb724b1d17ce3c18e08ee537ff2ccd087"
    });

    const project_id = 'kjzl6cwe1jw14bmiza795heatgbjmakmo1igluxr9cdehomw8llc3onj7ngixlz'
    const contextSchemaCommit = "k1dpgaqe3i64kjqc8pwu488zrftzkd0fxuex8ou82oc1utpl7nu1168fek2d9d5z00ma9ecmw6x017sievx7htbeaxnsv358ph6kzuyb8pkicv6juxe680910";
    const init = async () => {

        const isConnected= await orbis.isConnected()
        if (!isConnected) {
            isLogin.value = false;
            did.value = "";
            contexts.value = [];
            console.log(isConnected)
        } else {
            isLogin.value = true;
            did.value = isConnected.did;
            const {data} = await orbis.getContexts(project_id);
            contexts.value = data;
            console.log(data)

        }
    }
    const getContexts = async () => {
        const {data} = await orbis.getContexts(project_id);
        contexts.value = data;
    }
    const uploadMedia=async (file)=>{
        const res  = await orbis.uploadMedia(file);

        return res ;
    }
    const createContext = async (content) => {

        let res = await orbis.createContext({
            project_id: project_id,
            ...content
        });
        await init();
    }
    const updateContext = async (content, context_id) => {
        let res = await orbis.updateContext(
            context_id,
            ...content
        );
    }
    const deleteContext = async (context_id) => {
        console.log(context_id)
        let res = await orbis.updateContext(context_id,{is_deleted:true, name: '',project_id: project_id,});
        await init();
    }
    const connectSolanaWallet = async () => {
        const res = await orbis.connect_v2({
            provider: window.phantom?.solana,
            chain: "solana",
            lit: false
        })
        await init();
    }
    const connectEthereumWallet = async () => {
        const res = await orbis.connect_v2({
            provider: window.ethereum,
            chain: "ethereum",
            lit: false
        })
        await init();
    }
    const logOut=async ()=>{
        await orbis.logout();
        await init();


    }
    const getIsLogin = computed(() => isLogin.value);
    const getOrbis = computed(() => orbis.value);
    return {

        connectSolanaWallet,
        connectEthereumWallet,
        did,
        isLogin,
        createContext,
        updateContext,
        contexts,
        orbis,
        logOut,
        init,
        uploadMedia,
        deleteContext

    }
})