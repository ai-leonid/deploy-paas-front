import axios from 'axios'

axios.defaults.baseURL = 'https://deploy-paas.onrender.com'


export const createOrder = ({ excursionId: excursion, firstName, lastName, phone, email }) => {

	return axios({
		method: 'post',
		data: {
			excursion,
			firstName,
			lastName,
			phone,
			email
		},
		url: '/orders',
	})
}
