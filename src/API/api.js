import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '4d47dbe3-03df-4e80-9e46-3df12b2a85e4'
    }
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`).then(response => response.data);
    },

    login(email, password, rememberMe = false, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },

    logout() {
        return instance.delete(`/auth/login`).then(response => response.data);
    }
}

export const getStatusFollow = (type, id) => {

    if (type) {
        return instance.post(`/follow/` + id).then(response => response.data)

    } else {
        return instance.delete(`/follow/` + id).then(response => response.data)
    }
}


export const getUrlUser = (userId) => {
    return instance.get(`/profile/` + userId)
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
    },
    savePhoto(Photo) {
        const formData = new FormData();
        formData.append('image', Photo)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profileData) {
        return instance.put(`/profile`, profileData)
    },

}

export const securityAPI = {
    getСaptcha() {
        return instance.get(`/security/get-captcha-url`)
    }
}