# Tenants

Tenants can be managed using the REST API. Only users with administrative
powers can perform these calls.

## List all tenants

### URL

```http
GET /tenants HTTP/1.1
```

### Response

The response contains a list of tenants.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "jefuyguiwde8",
    "name": "Some Tenant",
    "created": "2016-12-10T19:37:40Z",
    "updated": "2016-12-13T14:26:15Z"
  },
  {
    "id": "3greg56gda",
    "name": "Other Tenant",
    "created": "2016-09-19T11:19:52Z",
    "updated": "2016-11-12T16:20:17Z"
  }
]
```

## Get a single tenant

### URL

```http
GET /tenants/:tenant HTTP/1.1
```

* tenant - **Required** The identifier of the tenant.

### Request

```http
GET /tenants/3greg56gda HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "3greg56gda",
  "name": "Other Tenant",
  "created": "2016-09-19T11:19:52Z",
  "updated": "2016-11-12T16:20:17Z"
}
```

## Create a tenant

### URL

```http
POST /tenants HTTP/1.1
```

### Input

Name         | Type     | Description
-------------|----------|------------
id           | `string` | **Optional** A unique identifier. If none is given, one is generated.
name         | `string` | **Required** The name of the tenant.

### Request

```http
POST /tenants HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "id": "newtenant",
  "name": "Yet another tenant"
}
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "newtenant",
  "name": "Yet another tenant",
  "created": "2017-01-01T01:00:32Z",
  "updated": "2017-01-01T01:00:32Z"
}
```
