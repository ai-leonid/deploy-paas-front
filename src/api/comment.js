import axios from 'axios'

axios.defaults.baseURL = 'https://deploy-paas.onrender.com'


export const createComment = (excursionId, { nickName, message, image }) => {
	const requestUrl = '/comments/' + excursionId

	return axios({
		method: 'post',
		data: {
			nickName,
			message,
			image,
		},
		url: requestUrl,
	})
}
