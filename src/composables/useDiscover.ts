import axios from 'axios'
import { StringifiedUtil } from 'unocss'

export interface Collective {
    id: string,
    name: string,
    username: string,
    type: string,
    avatar_url: string,
    // background: string,
    collective: {
        description: string 
        is_profit: string
        website: string
        donation_goal: number
        twitter: string
        tags: Object[]
    },
}

export const useDiscover = () => {
    const collectives = ref<Collective[]>([])

    const fetchCollectives = (search: string, limit: number) => {
        axios.get("/discover", {params: {search, limit}})
        .then(res => {
            collectives.value = res.data.data.data
            console.log(collectives.value)
        })
    }


    return {
        collectives,
        fetchCollectives
    }
}