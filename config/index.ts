import type {AuthOptions} from "next-auth"
import GitHubPorvider from "next-auth/providers/github"





export const authOptions : AuthOptions = {
    providers : [
        GitHubPorvider ({
            clientId : "",
            clientSecret : "",
        })
    ],
    secret : ""
} 