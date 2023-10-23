
import {GraphQLClient} from 'graphql-request'
import { request } from 'http';


const isProduction = process.env.NODE_ENV ===
'production';

const apiUrl = isProduction ? process.env.
NEXT_PUBLIC_GRAFBASE_API_URL || ' ' :'http://127.0.0.1:4000/graphql'
const apikey = isProduction ? process.env.
NEXT_PUBLIC_GRAFBASE_API_KEY || ' ' :'letmein';
const serverUrl = isProduction ? process.env.
NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'


const client = new GraphQLClient(apiUrl)

const  makeGraphQLRequest = async (query: string,
    variable = {} ) => {
        try {
            return await client.request(query,variable)
        }catch (error) {
          throw error;
        }
    }

    export const getUser = (email:string) => {
        //retun makeGraphQLRequest()
    }