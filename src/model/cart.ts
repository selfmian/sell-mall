import { BatchNoModel, GoodsModel } from "../interface/common";

export interface CartModel {
  "brandName": string;
  "cartDetailDTO": CartDetailModel[];
  "count": number;
  checked: boolean;// 全选
  isIndeterminate: boolean; // 去确定的，半选状态
}
export interface CartDetailModel extends GoodsModel {
  "batchNo": string;
  "brandId": number;
  "cartId": number;

  // 额外扩展的属性
  'checked': boolean
}
