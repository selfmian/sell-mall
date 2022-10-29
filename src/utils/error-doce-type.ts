export const errorCodeType = (code: string) => {
  let msg = '';

  switch (code.toString()) {
    case '401':
      msg = '没有权限'
      break;
    case '403':
      break;
    case '404':
      msg = '访问资源不存在';
    case '500':
      msg = '服务器内部发生错误';
    case 'default':
      msg = '系统位置错误，请反馈给管理员';
      break;
    default:
      return '发生未知错误，请联系管理员';
      
  }
}