
import { ApolloError, Resolver, useQuery } from "@apollo/client";
import { useState } from "react";
import { UserSchema } from "../../@apollo_server/MongoDB/models";

import cache from "../configs/cache";
import { ME } from "../querys/userQuery";

export const useCache: Resolver = () => {

    const [ state, setState ] = useState(0)

    /* cache.writeQuery({
        data: data,
        query: ME
    })

    const me = cache.readQuery({
        query: ME
    })

    console.log(me) */
    return { setState, state }

}


/*     const { data, loading, error } = useQuery<UserSchema>(ME);
   

    const [ obj, setUser ] = useState<(undefined); */