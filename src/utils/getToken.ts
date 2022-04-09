import stroe from "@/store"

let getToken = () => {
  let token:string | null | undefined = null
  token = stroe.getters.userInfo.token || sessionStorage.getItem("login-token")
  return token
}
export default getToken