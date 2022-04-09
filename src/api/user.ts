import axios from "@/utils/request"

export const getUserInfo = (params:object) =>  axios.get("/get/user.json", { params }) 