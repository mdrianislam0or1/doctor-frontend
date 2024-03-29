import axios from "axios"
import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_RESET, USER_LIST_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstance"
import { BOOKED_LIST_MY_RESET } from "../constants/bookConstant"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                "content-type": "application/json",
            }
        }

        const { data } = await axios.post(`https://doctor-backend-six.vercel.app/api/users/login`, { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: BOOKED_LIST_MY_RESET })
    dispatch({ type: USER_LIST_RESET })
}




//REGISTER

export const register = (name, role , email, password ,address,phone,image  ,date,isAdmin) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers: {
                "content-type": "application/json",
            }
        }

        const { data } = await axios.post(`https://doctor-backend-six.vercel.app/api/users`, { name, role , email, password ,address,phone,image  ,date,isAdmin }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}








//DETAILS

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`https://doctor-backend-six.vercel.app/api/users/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}




//UPDATE

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`https://doctor-backend-six.vercel.app/api/users/profile`, user, config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}






//USER_LIST

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`https://doctor-backend-six.vercel.app/api/users`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}









//ACTION_FOR_USER_DELETE

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

             await axios.delete(`https://doctor-backend-six.vercel.app/api/users/${id}`, config)

        dispatch({
            type: USER_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}







//ACTION_FOR_USER_UPDATE

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

          const { data } = await axios.put(`https://doctor-backend-six.vercel.app/api/users/${user._id}`,user, config)

        dispatch({type: USER_UPDATE_SUCCESS,})
        dispatch({type: USER_DETAILS_SUCCESS,payload: data})

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        })
    }
}


