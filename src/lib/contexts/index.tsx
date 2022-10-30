import { createContext } from 'react';
export const CredentialContext = createContext({credential: {email: "", password: ""}, setCredential: (state: any) => {}});