# Categories

Categorize Speech Challenges or categories.

## List all top level categories

List all top level categories which do not have a parent category.

### URL

```http
GET /categories HTTP/1.1
```

### Request

```http
GET /categories HTTP/1.1
Accept: application/json
```

### Response

The response is a JSON list with categories.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "category_1",
    "parent": null,
    "created": "2017-01-12T09:35:20Z",
    "updated": "2017-01-12T09:35:20Z",
    "name": "Category 1",
    "description": "Some awesome description.",
    "color": "#00f",
    "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
    "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
    "speechChallenges": []
  },
  {
    "id": "category_2",
    "parent": null,
    "created": "2017-01-12T09:36:20Z",
    "updated": "2017-01-12T09:36:20Z",
    "name": "Category 2",
    "description": "Another awesome description.",
    "color": "#0f0",
    "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
    "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
    "speechChallenges": []
  }
]
```

## Listing all categories with same parent

A category can be parent of another category (nesting). In order to get all categories with the same parent, this url can be used.

### URL

```http
GET /categories/:category/categories HTTP/1.1
```

### Request

```http
GET /categories/category_1/categories HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "category_1_1",
    "parent": "category_1",
    "created": "2017-01-13T09:35:20Z",
    "updated": "2017-01-13T09:35:20Z",
    "name": "Category 1.1",
    "description": "Some awesome description.",
    "color": "#00f",
    "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
    "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
    "speechChallenges": ["speech_x"]
  },
  {
    "id": "category_1_2",
    "parent": "category_1",
    "created": "2017-01-13T09:36:20Z",
    "updated": "2017-01-13T09:36:20Z",
    "name": "Category 1.2",
    "description": "Another awesome description.",
    "color": "#0f0",
    "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
    "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
    "speechChallenges": ["speech_y", "speech_w"]
  }
]
```

## Get a single category

### URL

```http
GET /categories/:category HTTP/1.1
```

* `category` - **Required** The category identifier.

### Request

```http
GET /categories/category_1_1 HTTP/1.1
Accept: application/json
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "category_1_1",
  "parent": "category_1"
  "created": "2017-01-12T09:38:20Z",
  "updated": "2017-01-12T09:38:20Z",
  "name": "Category 1.1",
  "description": "Super duper.",
  "color": null,
  "imageUrl": null,
  "iconUrl": null,
  "speechChallenges": ["speech_1", "12"]
}
```

## Create a catetory

### URL

```http
POST /categories/category HTTP/1.1
```

### Request parameters

Name               | Type      | Description
-------------------|-----------|------------
`id`               | `string`  | **Optional** The category identifier. If none is given, one is generated.
`parent`           | `string`  | **Optional** Identifier of the parent category.
`name`             | `string`  | **Optional** A name for the category.
`description`      | `string`  | **Optional** A possible more verbose description about the category.
`color`            | `string`  | **Optional** A color, preferably in RGB format.
`image`            | `blob`    | **Optional** An image to show with the category.
`icon`             | `blob`    | **Optional** An icon to show with the category.
`speechChallenges` | `object`  | **Optional** An array of Speech Challenges identifiers categorized in the category.

### Request

```http
POST /categories/category HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="id"

category_3
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="name"

Category 3
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="description"

Category three. Winner of all categories. Yes.
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="color"

#e3e3e3
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="image"; filename="img.png"
Content-Type: image/png

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="icon"; filename="icon.png"
Content-Type: image/png

<blob>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="speechChallenges"
Content-Type: application/json

["speech_1", "speech_2", "speech_3"]
--jhgd87g7Gy3d78--
```


### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://api.itslanguage.nl/categories/category_3

{
  "id": "category_3",
  "created": "2017-01-12T09:50:20Z",
  "updated": "2017-01-12T09:50:20Z",
  "name": "Category 3",
  "description": "Category three. Winner of all categories. Yes.",
  "color": "#e3e3e3",
  "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
  "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
  "speechChallenges": ["speech_1", "speech_2", "speech_3"]
}
```

## Update a category

### URL

```http
PUT /categories/:category HTTP/1.1
```

* `category` - **Required** The category identifier.

Update one or more properties of an existing category

### Request parameters

Name               | Type      | Description
-------------------|-----------|------------
`parent`           | `string`  | **Optional** Identifier of the parent category.
`name`             | `string`  | **Optional** A name for the category.
`description`      | `string`  | **Optional** A possible more verbose description about the category.
`color`            | `string`  | **Optional** A color, preferably in RGB format.
`image`            | `blob`    | **Optional** An image to show with the category.
`icon`             | `blob`    | **Optional** An icon to show with the category.
`speechChallenges` | `object`  | **Optional** An array of Speech Challenges identifiers categorized in the category.

### Request

```http
PUT /categories/category_3_1 HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "parent": ["categorie_3"]
}
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
Location: https://api.itslanguage.nl/categories/category_3

{
  "id": "category_3_1",
  "parent" "category_3",
  "created": "2017-01-12T09:50:20Z",
  "updated": "2017-01-12T09:50:20Z",
  "name": "Category 3",
  "description": "Category three. Winner of all categories. Yes.",
  "color": "#e3e3e3",
  "imageUrl": "https://api.itslanguage.nl/download/UKbsMpBsXaJUsBbK",
  "iconUrl": "https://api.itslanguage.nl/download/GdExSbs-ZVNnQUUe",
  "speechChallenges": ["speech_1", "speech_2", "speech_3"]
}
```
