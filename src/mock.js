// 需要先安装依赖 cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
const doMock = true

const list = [{
  id: 0,
  name: 'hh',
  tel: '123123'
}, {
  id: 1,
  name: 'tt',
  tel: '234234'
}]
let maxId = 1

if (doMock) {
  Mock.mock(/hello/, 'get', ({
    url,
    type,
    body
  }) => {
    return 'hello from mock'
  })

  Mock.mock(/login/, 'post', ({
    url,
    type,
    body
  }) => {
    const res = {
      data: {
        id: 500,
        rid: 0,
        username: 'admin',
        mobile: '13788888888',
        email: '123456@example.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      },
      meta: {
        msg: '登录成功',
        status: 200
      }
    }
    return res
  })

  Mock.mock(/add/, 'post', ({
    url,
    type,
    body
  }) => {
    const {
      name,
      tel
    } = JSON.parse(body)
    maxId++
    list.push({
      id: maxId,
      name,
      tel
    })

    console.log(list)
  })
}
