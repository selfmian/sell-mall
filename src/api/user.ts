import { postAction } from "../utils/http"

/**
 * 用户登录
 * @param username 用户名称
 * @param password 密码
 * @param isConfirmAgreement 是否同意用户协议
 */
const userLogin = async (username: string, password: string, isConfirmAgreement: boolean):Promise<string> => {
  const res = await postAction('/login', { username, password });
  return res.data.token
}
export { userLogin };