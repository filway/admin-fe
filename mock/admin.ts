/**
 * @description mock admin API
 */

 export default {
  'GET /api/admin/getUserInfo': {
      errno: 0,
      data: {
          username: 'filway',
      },

      // 模拟当前未登录
      // errno: 1,
      // message: '未登录',
  },

  'POST /api/admin/login': {
      errno: 0,
      data: {
          token: 'xxxxxx',
      },
  },
}
