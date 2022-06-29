const ADMIN = {
  user: 'admin',
  passowrd: 'admin'
}

export function getLogin ({user, password}) {
  const formatUser = user.toLowerCase()
  const formatAdminUser = ADMIN.user.toLowerCase()

  return new Promise((resolve, reject) => {

    if(formatUser === formatAdminUser && password === ADMIN.passowrd) {
      sessionStorage.setItem('is-login', 'true')
      resolve(true)
    } else {
      reject(new Error("Error de autenticación")) 
    }

  })
   
} 