
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{d as e}from"./_virtual_mf___mfe_internal__moth_mf_2_admin_mf_2_core_mf_2_naive__mf_owner__1__loadShare__pinia__loadShare__.js-BDuzYzk1.js";function t(e){return e}var n=new Set;function r(e,t){let r=`[naive/${e}]: ${t}`;n.has(r)||(n.add(r),console.error(r))}function i(e,t){console.error(`[naive/${e}]: ${t}`)}function a(e,t,n){console.error(`[naive/${e}]: ${t}`,n)}function o(e,t){throw Error(`[naive/${e}]: ${t}`)}var s=t(`n-message-api`),c=t(`n-message-provider`);function l(){let t=e(s,null);return t===null&&o(`use-message`,"No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),t}export{o as a,t as c,a as i,s as n,i as o,c as r,r as s,l as t};