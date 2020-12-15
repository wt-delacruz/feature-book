import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://raw.githubusercontent.com/wt-delacruz/feature-test-repo/master/myFirstFeature.feature',
    //withCredentials: false,
    headers: {}
})

export default {
    getFeature() {
        return apiClient.get('')
    }
}
