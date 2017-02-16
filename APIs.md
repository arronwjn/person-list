## API列表

以下是server提供的所有API接口, 所有接口都是POST请求响应

- /api/all-persons
- /api/add-person
- /api/edit-person
- /api/remove-person

## API调用例子

```
path: /api/all-persons
param: undefined
response: {
   "code": 200,
   "data": [
      {
         "id": 1,
         "name": "James Bond",
         "age": 30,
         "gender": "m",
         "email": "james.bond@secretagent.com"
      },
      {
         "id": 2,
         "name": "Angelina Jolie",
         "age": 40,
         "gender": "f",
         "email": "i-dont-tell-anyone@somewhere.com"
      }
   ]
}

path: /api/add-person
param: {
   "name": "test",
   "age": 20,
   "gender": "f",
   "email": "test@test.com"
}
response: {
   "code": 200
}
path: /api/all-persons
param: undefined
response: {
   "code": 200,
   "data": [
      {
         "id": 1,
         "name": "James Bond",
         "age": 30,
         "gender": "m",
         "email": "james.bond@secretagent.com"
      },
      {
         "id": 2,
         "name": "Angelina Jolie",
         "age": 40,
         "gender": "f",
         "email": "i-dont-tell-anyone@somewhere.com"
      },
      {
         "id": 12,
         "name": "test",
         "age": "20",
         "gender": "f",
         "email": "test@test.com"
      }
   ]
}
path: /api/edit-person
param: {
   "id": 12,
   "name": "test 2",
   "age": 30,
   "gender": "m",
   "email": "test2@test.com"
}
response: {
   "code": 200,
   "data": {}
}
path: /api/all-persons
param: undefined
response: {
   "code": 200,
   "data": [
      {
         "id": 1,
         "name": "James Bond",
         "age": 30,
         "gender": "m",
         "email": "james.bond@secretagent.com"
      },
      {
         "id": 2,
         "name": "Angelina Jolie",
         "age": 40,
         "gender": "f",
         "email": "i-dont-tell-anyone@somewhere.com"
      },
      {
         "id": 12,
         "name": "test 2",
         "age": "30",
         "gender": "m",
         "email": "test2@test.com"
      }
   ]
}
path: /api/remove-person
param: {
   "id": 12
}
response: {
   "code": 200,
   "data": {}
}
path: /api/all-persons
param: undefined
response: {
   "code": 200,
   "data": [
      {
         "id": 1,
         "name": "James Bond",
         "age": 30,
         "gender": "m",
         "email": "james.bond@secretagent.com"
      },
      {
         "id": 2,
         "name": "Angelina Jolie",
         "age": 40,
         "gender": "f",
         "email": "i-dont-tell-anyone@somewhere.com"
      }
   ]
}
path: /api/edit-person
param: {
   "id": 9999,
   "name": "hi"
}
response: {
   "code": 500,
   "data": {
      "error": "Cannot edit the person because he/she is not found in the list."
   }
}
path: /api/remove-person
param: {
   "id": 9999
}
response: {
   "code": 500,
   "data": {
      "error": "Cannot find person to remove."
   }
}
```
