# Organisations

## List all organisations

### URL

```http
GET /organisations HTTP/1.1
```

### Request parameters

Name      | Type     | Description
----------|----------|------------
sort      | `string` | **Optional** What to sort results by. Can be either `created`, `updated` or `name`. Default: `created`.
direction | `string` | **Optional** The direction of the sort. Can be either `asc` or `desc`. Default: `desc`.

### Response

The response contains a list of organisations.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "23",
    "created": "2008-08-06T19:37:40Z",
    "updated": "2010-09-21T14:26:15Z",
    "name": "School of silly walks"
  },
  {
    "id": "walamaloo",
    "created": "2002-06-19T11:19:52Z",
    "updated": "2011-03-12T16:20:17Z",
    "name": "University of Walamaloo"
  }
]
```

## Get a single organisation

### URL

```http
GET /organisations/:organisation HTTP/1.1
```

* organisation - **Required** The identifier of the organisation.

### Request

```http
GET /organisations/23 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "23",
  "created": "2000-04-17T19:20:23Z",
  "updated": "2001-12-14T07:38:45Z",
  "name": "School of silly walks"
}
```

## Create an organisation

### URL

```http
POST /organisation HTTP/1.1
```

### Input

Name         | Type     | Description
-------------|----------|------------
id           | `string` | **Optional** The organisation identifier. If none is given, one is generated.
name         | `string` | **Required** The name of the organisation.

### Request

```http
POST /organisation HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "id": "walamaloo",
  "name": "University of Walamaloo"
}
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "walamaloo",
  "created": "2002-06-19T11:19:52Z",
  "updated": "2011-03-12T16:20:17Z",
  "name": "University of Walamaloo"
}
```
