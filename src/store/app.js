import defaultSettings from '@/settings'
import { defineStore } from 'pinia'


const formatToLine = (value) => {
   return value.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export const useAppStore = defineStore('app', {
   /***
   *类似于组件的 data数据的 ,用来存储全局状态的
   * 1、必须是箭头函数
   */
   state: () => {
      return {
         sidebar: { opened: true },
         device: 'desktop',
         settings: defaultSettings,
         homeIndex: 1,
         cachedViews: [],
         cachedViewsDeep: [],
         currentProject: {name: '未选择', id: null},
         currentProjectDetail: null,
         currentProjectResult: null,
         theme: '',
         metaMap: {},
         metaParam: {
            r1: [],
            r2: [],
            r3: [],
            r4: []
         }
      }
   },

})
