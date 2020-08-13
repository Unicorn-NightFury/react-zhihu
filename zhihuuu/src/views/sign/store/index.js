//默认来index文件夹找，那就相当于是个对外接口，
//所以要在这里把需要导出去的数据写好

import reducer from './reducer'
import * as actions from './action'

export {
    reducer,
    actions
}