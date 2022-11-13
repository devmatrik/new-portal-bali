import NextAuth from "next-auth"
import { StorageApi } from '../../../components/MainCode/MainImport'
import CredentialsProvider from "next-auth/providers/credentials"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    //   adapter : {
    //     synchronize: false,
    //   },
    providers: [
        CredentialsProvider({
            name: "cridentials",
            credentials: {
                kode_login: 'kode_login'
            },
            authorize: async (cridentials) => {
                try {
                    let { data } = await StorageApi.auth('login_sso', cridentials);
                    const sesi_login = data.data[0]
                    return {
                        id: sesi_login.data_login,
                    }
                } catch (error) {
                    return null
                }

            }
        })
    ],
    callbacks: {

        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id
            }

            return token
        },
        session: ({ session, token }) => {

            // if (token) {
            //     session.id = token.id
            // }
            // console.log(token.id)
            return token.id
            // return {
            //     ok
            // }
        }
    },
    secret: "ahjdabshbfas",
    jwt: {
        secret: "ahjdabshbfas",
        encryption: true
    },
    pages: {
        signIn: "index"
    }
})
