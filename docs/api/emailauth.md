# Email authentication

Users can have email based credentials. These credentials can be managed using
the REST API. Only users with administrative powers can perform these calls.


## Create email credentials

### URL

To create an emailauth for the current user:

```http
POST /user/emailauths HTTP/1.1
```

To create an emailauth for another user:

```http
POST /users/:user/emailauths HTTP/1.1
```

### Input

Name     | Type     | Description
---------|----------|------------
email    | `string` | **Required** A unique email address.
password | `string` | **Optional** A secure password, if none is given, one will be generated.


### Request

```http
POST /users/sdj893us/emailauths HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "email": "SymonvanLonden@dayrep.com",
  "password": "aviB3leax"
}
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "email": "SymonvanLonden@dayrep.com",
    "password": "aviB3leax"
}
```
