import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || null)
  const isLoggedIn = ref(false)
  const router = useRouter()
  const currentUser = ref(localStorage.getItem('user')||null)


  const setCurrentUser = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    isLoggedIn.value = true
    currentUser.value = user
  }

  const useRegister = () => {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const successMessage = ref('')
    const errorMessage = ref('')


    const submitRegister = (usertype = 'personal') => {
      axios.post('/auth/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        confirm_password: confirmPassword.value,
        type: usertype,
      }).then((res) => {
        const token = res.data.data.access_token
        setCurrentUser(res.data.data.user, token)
        successMessage.value = res.data.message
        errorMessage.value = ""

        axios.get('/auth/email/verify', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
      }).catch(err => {
        errorMessage.value = err.response.data.message
        successMessage.value = ''
      })
    }

    return {
      successMessage,
      errorMessage,
      name,
      email,
      password,
      confirmPassword,
      submitRegister,
    }
  }

  const useLogin = () => {
    const email = ref('')
    const password = ref('')
    const message = ref('')
    const isSuccess = ref<boolean | null>(null)

    const login = () => {
      console.log('login', email.value, password.value)
      axios.post('/auth/login', { email: email.value, password: password.value },
        {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res: any) => {
          isSuccess.value = true
          currentUser.value = res.data.data.user
          message.value = res.data.message
          router.push('discover')


        }).catch((err: any) => {
          console.log('error login', err.response)
          isSuccess.value = false
          
          message.value = err.response.data.message
        })
    }
    return {
      login,
      message,
      email,
      password,
      isSuccess,
    }
  }

  return {
    currentUser,
    token,
    isLoggedIn,
    useRegister,
    useLogin,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
