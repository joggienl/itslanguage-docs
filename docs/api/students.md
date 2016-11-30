# Students

## List all students

### URL

```http
GET /organisations/:organisation/students HTTP/1.1
```

* organisation - **Required** The identifier of the organisation.

### Response

The response is a JSON list with students.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "24",
    "firstName": "Harry",
    "lastName": "Bagot",
    "gender": "male",
    "birthYear": 1980
  },
  {
    "id": "dk",
    "firstName": "Debbie",
    "lastName": "Katzenberg",
    "gender": "female",
    "birthYear": 1983
  }
]
```

## Get a single student

### URL

```http
GET /organisations/:organisation/students/:student HTTP/1.1
```

* organisation - **Required** The identifier of the organisation.
* student - **Required** The identifier of the student.

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "29",
  "firstName": "Luigi",
  "lastName": "Vercotti",
  "gender": "male",
  "birthYear": 1969
}
```

## Create a student

### URL

```http
POST /organisations/:organisation/students HTTP/1.1
```

* organisation - **Required** The identifier of the organisation.

### Parameters

Name      | Type     | Description
----------|----------|------------
id        | `string` | **Optional** The student identifier. If none is given, one is generated.
firstName | `string` | **Optional** The first name of the student.
infix     | `string` | **Optional** The name infix of the student.
lastName  | `string` | **Optional** The last name of the student.
gender    | `string` | **Optional** The gender of the student ("male" or "female").
birthYear | `int`    | **Optional** The birth year of the student.

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://api.itslanguage.nl/organisations/whizzo/students/4

{
  "id": "4",
  "firstName": "Arthur",
  "lastName": "Belling",
  "gender": "male",
  "birthYear": 1976
}
```
