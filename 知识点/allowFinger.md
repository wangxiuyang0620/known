安装 npm i alloyFinger -S
  new AlloyFinger(元素,{
                swipe: evt =>console.log(evt.direction,'滑动'),
                touchStart:()=>console.log('touchStart触碰开始'),
                multipointStart:()=>console.log('multipointStart多个手指以上触碰屏幕触发'),
                multipointEnd:()=>console.log('multipointStart只剩一个手指或者没有手指了就触发'),
                tap:()=>console.log('tab点按触发'),
                doubleTap:()=>console.log('双击屏幕触发'),
                longTap:()=>console.log('长按屏幕触发（750ms）'),
                singleTap:()=>console.log('单击屏幕触发'),
                pinch: evt => console.log(evt.zoom,"缩放"),
                pressMove: evt=>console.log(evt.deltaX,"X轴",evt.deltaY,"Y轴"),
                rotate: evt => console.log('旋转')

            })
        })