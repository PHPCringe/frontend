import axios from 'axios'

export const useDiscover = () => {
    const collectives = ref({})

    onMounted(()=> {
        axios.get("/discover")
            .then(res => {
                console.log(res)
            })
    })

    return {
        collectives
    }
}