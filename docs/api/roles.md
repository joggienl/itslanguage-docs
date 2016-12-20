# Roles

Roles are named groups of permissions. A role is typically assigned to a user
to grant a user permissions.


## List roles

### URL

```http
GET /roles HTTP/1.1
```

### Request

```http
GET /roles HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

[
  {
    "name": "Admin",
    "permissions": [
        "CHOICE_CHALLENGE_CREATE",
        "CHOICE_CHALLENGE_DELETE"
    ]
  },
  {
    "name": "Student",
    "permissions": [
        "CHOICE_CHALLENGE_List"
    ]
  }
]
```
