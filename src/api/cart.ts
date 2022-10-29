import { CartModel } from "../model/cart";
import { delAction, getAction } from "../utils/http";

/**
 * 
 * @param page 页码
 * @param page_num 单页数据量
 * @returns 
 */
const cartList = async (page: number, page_num: number):Promise<CartModel[]> => {
  const res = await getAction('/shop/mall-cart-list', { page, page_num });
  return res.data as CartModel[];
}

/**
 * 
 * @param cartIds 购物车商品项的ID 集合 格式为逗号拼接的ID，如 1,2,3,4
 * @returns 
 */
const cartRemove = async (cartIds: string): Promise<boolean> => {
  const res = await delAction('/shop/mall-cart-del', { cartIds });
  return res.code === 0;
}

export { cartList,cartRemove };