// pages/demo/demo.ts
Page({
    data: {
      arr: ["beijing", "shanghai", "guangzhou", "shenzhen"],
      objArr: [{name: "zjl", age: 12}]
    },

    handleClick () {
      console.log("我被点击了")
    }

})