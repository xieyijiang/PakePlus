
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{h as e,m as t}from"./auth-DgSDzHAK.js";function n(e){return{code:e.code.trim().toLowerCase(),name:e.name.trim(),description:e.description.trim()}}async function r(e){return(await t.post(`/admin/v1/permission/query`,{page:e.page,pageSize:e.pageSize,keyword:e.keyword?.trim()})).data}async function i(){return(await t.get(`/admin/v1/permission/options`)).data}async function a(e){return(await t.post(`/admin/v1/permission/create`,n(e))).data}async function o(e){return(await t.post(`/admin/v1/permission/update`,n(e))).data}async function s(e){await t.post(`/admin/v1/permission/delete`,{code:e})}function c(e){if(e.error||!e.data)throw Error(e.error||`权限请求失败`);return e.data}async function l(t){return c(await e.permission.query({userId:t}))}async function u(t,n){return c(await e.permission.set({userId:t,permissions:n}))}var d={queryPermissions:r,getPermissionOptions:i,createPermission:a,updatePermission:o,removePermission:s,getUserPermissions:l,setUserPermissions:u};export{d as t};