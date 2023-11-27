import {defineStore} from "pinia";


import {User,useOrbis,Orbis} from "@orbisclub/components";
const PROJECT_ID = "kjzl6cwe1jw148elxfksuebfhueby8soaosnsngq1bjew2r779z8kr7k3p4nw4i";

export const useOrbisStore = defineStore('orbis',   () => {
    //state
    const isLogin = ref(false);
    const did = ref("");
    const contexts = ref([]);
    const profile = ref(null);
    const orbis = new Orbis({
        PINATA_GATEWAY: "beige-changing-squirrel-773.mypinata.cloud",
        PINATA_API_KEY: "160f16c829a96b1ca299",
        PINATA_SECRET_API_KEY: "88568421a28b362be7934cef000bfc4eb724b1d17ce3c18e08ee537ff2ccd087",
        useLit: true,
        node: "https://node2.orbis.club"
    });

    //Context Schema
    const init = async () => {
        const isConnected= await orbis.isConnected()
        if (!isConnected) {
            isLogin.value = false;
            did.value = "";
            contexts.value = [];
            console.log(isConnected)
        } else {
            isLogin.value = true;
            console.log(isConnected)
            did.value = isConnected.did;
            if(profile.value===null || !profile.value){
                const { data, error } = await orbis.getProfile(did.value);
                console.log(data)
                console.log(error)
                if(!error){
                    profile.value = data;
                    console.log(data)
                }
            }
            await getContexts()

        }
    }
    const updateProfile = async (options) => {
        const res = await orbis.updateProfile(options);
        console.log(res)
        const { data, error } = await orbis.getProfile(did.value);
        console.log(data)
        console.log(error)
        if(!error){
            profile.value = data;
            console.log(data)
        }

    }
    const getProfile = computed(() => {
        return profile.value;
    })
    const getContexts = async () => {
        const {data} =await orbis.getContexts(PROJECT_ID);
        contexts.value = data;
        console.log(data)
    }
    const createContext = async (content) => {
        console.log(content)
        let dids=[];
        dids.push(did.value)
        let res = await orbis.createContext({
            name: content.name,
            displayName: content.name,
            description: content.description,
            pfp: content.pfp,
            project_id: PROJECT_ID
        });
        await init();
    }
    const updateContext = async ( context_id,content,) => {
        const res = await orbis.updateContext(context_id, {
            ...content,
            project_id: PROJECT_ID,
            name: content.displayName
        });
        await init();
    }
    const deleteContext = async (server) => {
        console.log(server)
        let res = await orbis.updateContext(server.stream_id, {is_deleted: true,project_id:server.project_id,name:''});
        await init();
    }
    const getContext= (context_id)=>{
        const data=contexts.value.find((id)=>id.stream_id===context_id)
        console.log(data)
        return data;
    }
    const getParentContext=async (context_id)=>{
        const { data, error } = await orbis.getContext(context_id);
        if(error){
            return null;
        }
        return data.context;
    }
    //Child context Schema
    const createChannel = async (context_id, content,rules=null) => {
        console.log(content)
        console.log(context_id)
        let dids=[];
        dids.push(did.value)
        if(rules){
            dids.push(rules)
            const {error} = await orbis.createContext({
                name: content,
                displayName: content,
                project_id: PROJECT_ID,
                context: context_id,
                accessRules:[
                    {
                        type: "did",
                        authorizedUsers: dids.map((did)=>{
                            return {
                                did:did,
                            }
                        })
                    }
                ]
            });
            if(!error){
                await init();
            }
        }else {
            const {error} = await orbis.createContext({
                name: content,
                displayName: content,
                project_id: PROJECT_ID,
                context: context_id
            });
            if(!error){
                await init();
            }

        }

    }
    const createPostOfChanel = async (context_id, content) => {

    }
    const uploadMedia=async (file)=>{
        return await orbis.uploadMedia(file) ;
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
            lit: true
        })
        await init();
    }
    const logOut=async ()=>{
        await orbis.logout();
        await init();


    }
    const getDid=computed(()=>did.value)

    return {
        createChannel,
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
        deleteContext,
        getContext,
        profile,
        updateProfile,
        getProfile,
        getParentContext,
        getDid
    }
})