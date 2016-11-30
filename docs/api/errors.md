Errors are reported with HTTP status codes in the 400 (for client errors) or 500 (for server errors) range. The response will contain a JSON object describing the error.

## Error Format

There are three possible types of client errors on API calls that
receive request bodies:

* Sending invalid JSON will result in a `400 Bad Request` response.

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 36

{"message": "Problems parsing JSON"}
```

* Sending the wrong type of JSON values will result in a
  `400 Bad Request` response.

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 41

{"message": "Body should be a JSON Hash"}
```

* Sending invalid fields will result in a `422 Unprocessable Entity`
  response.

```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json
Content-Length: 148

{
  "message": "Validation Failed",
  "errors": [
    {
      "resource": "Issue",
      "field": "title",
      "code": "missing_field"
    }
  ]
}
```

All error objects have resource and field properties so that your client
can tell what the problem is.  There's also an error code to let you
know what is wrong with the field.  These are the possible validation error
codes:

Error Name       | Description
-----------------|------------
`missing`        | A resource does not exist.
`missing_field`  | A required field on a resource has not been set.
`invalid`        | The formatting of a field is invalid.  The documentation for that resource should be able to give you more specific information.
`already_exists` | Another resource has the same value as this field.  This can happen in resources that must have some unique key (such as Label names).

If resources have custom validation errors, they will be documented with the resource.

## Generic Errors

Several types of errors can be raised on most API calls. Therefore,
these generic errors are described in the following list, not in each
API call individually:

Error Code                 | Description
---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
`403 Forbidden`            | Make sure to apply the right authentication headers to the request.
`404 Not Found`            | One or more parameters failed to result in the retrieval of an exisiting entity. This error may also be returned when the entity exists but belongs to another tenant.
`409 Conflict`             | When creating or updating an entity, one of the parameters would lead to overwriting an entity that is already present.
`410 Gone`                 | When deleting an entity that was already deleted, this error is returned.
`422 Unprocessable Entity` | Some of the provided parameters could not be validated.


## HTTP Verbs

Where possible, the API strives to use appropriate HTTP verbs for each action.

Verb     | Description
---------|------------
`HEAD`   | Can be issued against any resource to get just the HTTP header info.
`GET`    | Retrieve resources.
`POST`   | Create resources, or performing custom actions that'll modify data.
`PUT`    | Replace resources or collections.
`PATCH`  | Partially replace resources or collections.
`DELETE` | Delete resources.

## JSONP Errors

When clients request responses in JSONP format, the API server will *always* respond with a 200 response code. This prevents the web browser swallowing the HTTP response without giving the Javascript callback a chance to process it.

It is always possible to identify an error response from a successful one by looking at the `typename` field. The would-be HTTP status code is included in the `status` field.

<div class="alert alert-danger">
  <p>The JSONP return structure is not final yet.</p>
</div>
