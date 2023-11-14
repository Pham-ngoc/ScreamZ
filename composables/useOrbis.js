import {defineStore} from "pinia";

import {Orbis} from '@orbisclub/orbis-sdk'

export const useOrbis = defineStore('orbis',  () => {
    const project_id = 'kjzl6cwe1jw14bmiza795heatgbjmakmo1igluxr9cdehomw8llc3onj7ngixlz'
    const contextSchemaCommit = "k1dpgaqe3i64kjqc8pwu488zrftzkd0fxuex8ou82oc1utpl7nu1168fek2d9d5z00ma9ecmw6x017sievx7htbeaxnsv358ph6kzuyb8pkicv6juxe680910";
    //state
    const isLogin = ref(false);
    const did = ref("");
    const contexts = ref([]);
    const orbis = reactive(new Orbis({
        PINATA_GATEWAY: "beige-changing-squirrel-773.mypinata.cloud",
        PINATA_API_KEY: "160f16c829a96b1ca299",
        PINATA_SECRET_API_KEY: "88568421a28b362be7934cef000bfc4eb724b1d17ce3c18e08ee537ff2ccd087"
    }));
    let isConnected = orbis.isConnected();
    console.log(isConnected)
    if (!isConnected) {
        isLogin.value = false;

    } else {
        isLogin.value = true;
        did.value = isConnected.did;
        const {data} =  orbis.getContexts(project_id);
        contexts.value = data;

    }
    const createContext = async (content) => {
        let res = await orbis.createContext({
            project_id: project_id,
            ...content
        });
    }
    const updateContext = async (content, context_id) => {
        let res = await orbis.updateContext(
            context_id,
            ...content
        );
    }
    const connectSolanaWallet = async () => {
        const res = await orbis.connect_v2({
            provider: window.phantom?.solana,
            chain: "solana",
            lit: false
        })
        if (res) {
            isLogin.value = true;
            did.value = res.did;
        }
    }
    const connectEthereumWallet = async () => {
        const res = await orbis.connect_v2({
            provider: window.ethereum,
            chain: "ethereum",
            lit: false
        })
        if (res) {
            isLogin.value = true;
            did.value = res.did;
        }
    }

    const getIsLogin = computed(() => isLogin.value);

    return {

        connectSolanaWallet,
        connectEthereumWallet,
        did,
        isLogin,
        createContext,
        updateContext,
        contexts,
        orbis

    }
})