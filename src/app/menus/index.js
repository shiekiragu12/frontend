import admin from './admin-menus.js'
import client from './client-menus.js'
const getMenus = function(role) {
  if (role === 'admin') {
    return admin
  }
  if (role === 'client') {
    return client
  }
  return null
}

export default {
  getMenus
}
