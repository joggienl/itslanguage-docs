# Users

Users can be managed using the REST API. Only users with administrative
powers can perform these calls.


## Create a user

### URL

```http
POST /users HTTP/1.1
```

### Input

Name         | Type     | Description
-------------|----------|------------
id           | `string` | **Optional** A unique identifier. If none is given, one is generated.
firstName    | `string` | **Required** The first name of the user.
infix        | `string` | **Required** The infix of the user.
lastName     | `string` | **Required** The last name of the user.

### Request

```http
POST /users HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "firstName": "Najat",
  "infix": "van der",
  "lastName": "Lee"
}
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "sdcjb823jhguys5j",
  "firstName": "Najat",
  "infix": "van der",
  "lastName": "Lee",
  "tenantId": null,
  "created": "2016-12-22T02:14:05Z",
  "updated": "2016-12-22T02:14:05Z"
}
```


## List users

### URL

```http
GET /users HTTP/1.1
```

### Request

```http
GET /users HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

[
  {
    "id": "sdcjb823jhguys5j",
    "firstName": "Najat",
    "infix": "van der",
    "lastName": "Lee",
    "tenantId": null,
    "created": "2016-12-22T02:14:05Z",
    "updated": "2016-12-22T02:14:05Z"
  },
  {
    "id": "iosdhrfd893ufg",
    "firstName": "Chrissy",
    "infix": null,
    "lastName": "Haagen",
    "tenantId": null,
    "created": "2017-01-01T14:05:05Z",
    "updated": "2017-01-01T14:05:05Z"
  }
]
```
