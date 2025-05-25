// Python客户端，通过访问Node服务端获取加密参数，进行请求

import requests

test_data = 'test data'

res = requests.post(url='http://127.0.0.1:3000/encrypt/qq/music', data={'data': test_data})

print(res.content)
