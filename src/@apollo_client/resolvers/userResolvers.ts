
import { Resolver, useQuery } from "@apollo/client";
import { UserSchema } from "../../@apollo_server/MongoDB/models";
import { useGlobalState } from "../../hooks/globalStateHook";
import cache from "../configs/cache";
import { ME } from "../querys/userQuery";

export const setUserResolver: Resolver = () => {
    
    const { data, loading, error } = useQuery<UserSchema>(ME);

    const { dispatch } = useGlobalState();



    return { data, loading, error }

}