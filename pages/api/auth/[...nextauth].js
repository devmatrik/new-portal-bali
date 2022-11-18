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
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Masukan Username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Masukan password"
                }
            },
            authorize: async (cridentials) => {
                try {
                    let { data } = await StorageApi.auth('login_portal', cridentials);
                    return {
                        id: data.data,
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
