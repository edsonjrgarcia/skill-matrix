import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from "next-auth/jwt";

export default NextAuth({
    //Your secrete here
    //secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy:'jwt',
    },

    providers: [
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "Username", type: "text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const base64Credentials = btoa(`${credentials?.email}:${credentials?.password}`);
                    const { login } = await axios.get('/authentication', {
                        headers: {
                            'Authorization': `${base64Credentials}`
                        }
                    })
                    console.log(login)

                    if(!login){
                        throw new Error('Usuário ou senha invalidos!')
                    }

                    const{jwt, user} = login
                    const{id, username, email} = user

                    console.log(jwt)
                    
                    if(!jwt || !id || !username || !email){
                        return null
                    }
                    
                    return {
                        jwt, 
                        id, 
                        name: username,
                        email,
                    }
                } catch(error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
    
    callbacks: {
        async jwt({token, user}) {
           const isSignIn = !user;
            
            if(isSignIn) {
                if(!user){
                    return Promise.resolve({})
                
                } else {
                    if (!token?.expiration) return Promise.resolve({})
                }
            }
            return Promise.resolve(token)
        },

        async session({ session, token, user } : {session: Session; token: JWT; user: any }) {
            if(token) {
                session.accessToken = token.accessToken;
                session.user.id = token.id;
            } else {
                return null
            }
            return session
        },
        
    }

});