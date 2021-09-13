import axios from "axios";

const API_URL = "http://localhost:8080/auth";

class AuthService {
    login(data) {
        return axios
            .post(API_URL + "/sign-in", {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
}

export default new AuthService;