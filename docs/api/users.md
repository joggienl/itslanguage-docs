# Users

Users can be managed using the REST API. Only users with administrative
powers can perform these calls.


## Create a user

When creating a user, the user is created at the same level as the current
user. This means that when a top level admin creates a user, a top level user
is created. When the current user resides in an organisation the created user
will be created in that organisation.
When creating a user in a different organisation, the current user needs to
[impersonate](oauth2.md#impersonation) the target organisation.

### URL

```http
POST /users HTTP/1.1
```

### Input

Name         | Type       | Description
-------------|------------|------------
id           | `string`   | **Optional** A unique identifier. If none is given, one is generated.
firstName    | `string`   | **Required** The first name of the user.
infix        | `string`   | **Required** The infix of the user.
lastName     | `string`   | **Required** The last name of the user.
roles        | `string[]` | **Required** The names of roles to grant the user.

### Request

```http
POST /users HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "firstName": "Najat",
  "infix": "van der",
  "lastName": "Lee",
  "roles": ["ADMIN"]
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
  "roles": ["ADMIN"],
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
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "sdcjb823jhguys5j",
    "firstName": "Najat",
    "infix": "van der",
    "lastName": "Lee",
    "roles": ["STUDENT"],
    "created": "2016-12-22T02:14:05Z",
    "updated": "2016-12-22T02:14:05Z"
  },
  {
    "id": "iosdhrfd893ufg",
    "firstName": "Chrissy",
    "infix": null,
    "lastName": "Haagen",
    "roles": ["TEACHER"],
    "created": "2017-01-01T14:05:05Z",
    "updated": "2017-01-01T14:05:05Z"
  }
]
```


## Get current user

### URL

```http
GET /user HTTP/1.1
```

### Request

```http
GET /user HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "bgfg83bjdg62j",
  "firstName": "Juriaan",
  "infix": null,
  "lastName": "Winkens",
  "roles": ["STUDENT"],
  "created": "2017-01-03T12:16:55Z",
  "updated": "2017-01-03T12:16:55Z"
}
```
