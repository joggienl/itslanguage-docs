## URLs

API actions are usually performed by accessing our production servers on the `api.itslanguage.nl` domain.
For example:

```sh
curl -i https://api.itslanguage.nl/organisations
```

```http
HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Type: application/json; charset=utf-8
Vary: Accept-Encoding
Date: Wed, 20 Nov 2013 17:10:22 GMT
Server: Google Frontend
Alternate-Protocol: 443:quic
Transfer-Encoding: chunked

[]
```

### DT(A)P environments

There are three environments. In most cases you'll only use the production environment.
When instructed to test on any other environment, these are their characteristics:

#### Development

The latest features may be tested in the development environment: `https://api-dot-dev.itslanguage.nl`.

This environment may become unstable and data may be reset at any time.

This documentation matching this environment is available at: `https://help-dot-dev.itslanguage.nl`.

#### Testing

More mature features may be tested in the test environment: `https://api-dot-test.itslanguage.nl`.

This environment may become unstable and data may be reset at any time.

This documentation matching this environment is available at: `https://help-dot-test.itslanguage.nl`.

#### Production

Stable features may be used in the production environment: `https://api.itslanguage.nl`.

This environment will store data it receives for a longer time.

This documentation matching this environment is available at: `https://help.itslanguage.nl`.

## Request and Response Format

All endpoints accept and return JSON, with the exception of a few special cases that require submitting blobs.

### JSON

All endpoints accept and return JSON, with the exception of a few special cases designed for use from a web browser or containing blobs.

As described in [RFC 4627](http://www.ietf.org/rfc/rfc4627.txt):
*JSON text SHALL be encoded in Unicode. The default encoding is UTF-8.*
Therefore, specifying the encoding with `charset=utf-8` in the header is optional, it's an implicit default.

When sending JSON the appropriate Content-Type header needs to be set.

```bash
curl -d '{"name": "sheffield"}' -H "Content-Type: application/json" https://api.itslanguage.nl/organisations
```

Blank fields are included as `null` instead of being omitted.

### Multipart form data

When submitted forms contains binary data like audio fragments, this request format needs to be used.
An example form POST looks like this:

```http
POST /organisation/crimson/challenges/choice HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=jhgd87g7Gy3d78

--jhgd87g7Gy3d78
Content-Disposition: form-data; name="choices"

located
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="choices"

sited
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/ogg

<spoken audio: located>
--jhgd87g7Gy3d78
Content-Disposition: form-data; name="audio"; filename="blob"
Content-Type: audio/wav

<spoken audio: sited>
--jhgd87g7Gy3d78--
```

Repeated fieldnames are accepted and transformed as lists in the given order.

### URL encoded forms

This content type is unsupported for most API calls, it may be supported for legacy reasons.

```http
POST /organisations/crimson/challenges/choice HTTP/1.1
Accept: application/json
Content-Type: application/x-www-form-urlencoded

question=The%20Pitcairn%20Islands%20are%20...%20in%20the%20South%20Pacific%20Ocean&choices=located&choices=sited&choices=stationed&choices=settled
```

## Data representation

## Timestamps

All timestamps are returned in ISO 8601 format `YYYY-MM-DDTHH:MM:SSZ`.

## Securing Your Connection

ITSLanguage's API is available over both secure (HTTPS) and unsecure connections. The section on [authentication](authentication.md) goes into more detail on when you should use one or the other. Note that cross-domain requests from a web browser should match the protocol (HTTP or HTTPS) used by the page the browser is displaying to avoid security warnings.

[support]: http://itslanguage.nl/contact

## Summary Representations

When you fetch a list of resources, the response includes a _subset_ of the
attributes for that resource. This is the "summary" representation of the
resource. (Some attributes are computationally expensive for the API to provide.
For performance reasons, the summary representation excludes those attributes.
To obtain those attributes, fetch the "detailed" representation.)

**Example**: When you get a list of students, you get the summary
representation of each student. Here, we fetch the list of students owned
by the [sheffield]() organisation:

```http
GET /organisations/sheffield/students HTTP/1.1
```

## Detailed Representations

When you fetch an individual resource, the response typically includes _all_
attributes for that resource. This is the "detailed" representation of the
resource. (Note that authorization sometimes influences the amount of detail
included in the representation.)

**Example**: When you get an individual repository, you get the detailed
representation of the repository. Here, we fetch the
[sheffield/amy]() student:

```http
GET /organisations/sheffield/students/amy HTTP/1.1
```

The documentation provides an example response for each API method. The example
response illustrates all attributes that are returned by that method.

## Parameters

Many API methods take optional parameters. For GET requests, any parameters not
specified as a segment in the path can be passed as an HTTP query string
parameter:

```bash
curl -i "https://api.itslanguage.nl/organisations/sheffield/students/?first_name=mauro"
```

In this example, the 'sheffield' value is provided for the `:organisation`
parameter in the path while `:first_name` is passed in the query
string.

For POST, PUT, and DELETE requests, parameters not included in the URL should
be encoded as form data with a Content-Type of 'application/x-www-form-urlencoded':

```bash
curl -i -d 'first_name=Mauro' https://api.itslanguage.nl/organisations/sheffield/students
```

Or the parameters should be encoded as JSON with a Content-Type of 'application/json':

```bash
curl -i -d '{"firstName": "Mauro"}' -H 'application/json' https://api.itslanguage.nl/organisations/sheffield/students
```

## Pagination

Requests that return multiple items will be paginated to 20 items by
default.  You can set a custom page size up to 100 with the `?per_page` parameter.

```bash
curl "https://api.itslanguage.nl/resources?per_page=100"
```

### Link Header

The pagination info is included in
[the Link header](http://tools.ietf.org/html/rfc5988). It is important to
follow these Link header values instead of constructing your own URLs. In some
instances, pagination is not based on page number.

```http
HTTP/1.1 200 OK
Link: <https://api.itslanguage.nl/resources?page=for12c&per_page=100>; rel="next",
      <https://api.itslanguage.nl/resources?page=back12c&per_page=100>; rel="prev"
```

_Linebreak is included for readability._

The possible `rel` values are:

Name    | Description
--------|------------
`next`  | The immediate next page of results.
`prev`  | The immediate previous page of results.

## Cross Origin Resource Sharing

The API supports Cross Origin Resource Sharing (CORS) for AJAX requests.
you can read the [CORS W3C working draft](http://www.w3.org/TR/cors), or
[this intro](http://code.google.com/p/html5security/wiki/CrossOriginRequestSecurity) from the
HTML 5 Security Guide.

Here's a sample request sent from a browser hitting
`http://example.com`:

```bash
curl -i https://api.itslanguage.nl -H "Origin: http://example.com"
```
```http
HTTP/1.1 302 Found
```

This is what the CORS preflight request looks like:

```bash
curl -i https://api.itslanguage.nl -H "Origin: http://example.com" -X OPTIONS
```
```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Max-Age: 86400
Access-Control-Allow-Credentials: true
```

## JSON-P Callbacks
You can send a `?callback` parameter to any GET call to have the results
wrapped in a JavaScript function.  This is typically used when browsers want
to embed content in web pages by getting around cross domain
issues.  The response includes the same data output as the regular API,
plus the relevant HTTP Header information.

```bash
curl "https://api.itslanguage.nl?callback=foo"
```
```js
foo({
  "meta": {
    "status": 200,
    "Link": [ // pagination headers and other links
      ["https://api.itslanguage.nl?cursor=next2", {"rel": "next"}]
    ]
  },
  "data": {
    // the data
  }
})
```

You can write a JavaScript handler to process the callback like this:

```js
function foo(response) {
  var meta = response.meta
  var data = response.data
  console.log(meta)
  console.log(data)
}
```

All of the headers are the same String value as the HTTP Headers with one
notable exception: Link.  Link headers are pre-parsed for you and come
through as an array of `[url, options]` tuples.

[support]: http://itslanguage.nl/contact
