import nookies from 'nookies';
import axios from 'axios';

export const LINKED_IN_REDIRECT = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86tvsizmt73xzn&redirect_uri=http://localhost:8080/api/v1/auth2&scope=r_liteprofile r_emailaddress";

export const withUser = async (context) => {
    const cookies = nookies.get(context);
    if (cookies.token) {
        const url = await axios.get("http://localhost:8080/api/v1/users", {
            params: {
                accessToken: cookies.token
            }
        });
        return {
            props: {
                profileUrl: url.data
            }
        }
    }
}
