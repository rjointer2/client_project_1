
import { useQuery } from "@apollo/client"
import { ME } from "../@apollo_client/querys/userQuery"
import { UserSchema } from "../@apollo_server/MongoDB/models"



export const useUser =  ( ) => {


    const { data, loading, error } = useQuery<{ me: UserSchema | null }>(ME)

    return {
        data, loading, error
    }
}

export const useCacheUser =  () => {


    const { data, loading, error } = useQuery<{ me: UserSchema }>(ME, {
        fetchPolicy: 'cache-only'
    })

    return {
        me: data?.me, loading, error
    }
}