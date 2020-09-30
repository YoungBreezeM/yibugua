Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log('tabBar attached');
      console.log(this);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('tabBar detached');
      console.log(this);
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "rgb(29, 27, 27)",
    selectedColor: "#FF713D",
    backgroundColor: "rgb(29, 27, 27)",
    list: [
      {
        pagePath: "/pages/community/index",
        iconPath: "/custom-tab-bar/icon/icon_home.png",
        selectedIconPath: "/custom-tab-bar/icon/icon_home_HL.png",
        text: "社区"
      },
      {
        pagePath: "/pages/index/index",
        iconPath: "/custom-tab-bar/icon/icon_home.png", 
        selectedIconPath: "/custom-tab-bar/icon/icon_home_HL.png",
        isSpecial: true, // 标记特殊图标---中间那个
        text: "起卦"
      },
      {
        pagePath: "/pages/info/index",
        iconPath: "/custom-tab-bar/icon/icon_mine.png",
        selectedIconPath: "/custom-tab-bar/icon/icon_mine_HL.png",
        text: "修录"
      }
    ]
  },
  attached() {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      console.log(e.currentTarget.dataset);
      const data = e.currentTarget.dataset
      const url = data.path
      // console.log('before');
      // console.log(this);
      wx.switchTab({ url })
      /* this.setData({
        selected: data.index
      }) */
      // console.log('after');
      // console.log(this);
    }
  }
})
