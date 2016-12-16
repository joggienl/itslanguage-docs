# Tenant server authentication

OAuth2 is implemented so a tenant may authenticate and request an access
token. Access tokens may be distributed to end-users to grant them access. By
using access tokens, access may be restricted by using scopes.

Each tenant will receive a set of secrets called principal and credentials.
The principal is a unique identifier (like a username) and the credentials are
a secret, only the tenant should know (a password). A tenant can authenticate
and receive an access token using these secrets.

An access token can be used to make an authorised request. To do so, the
access token should be passed as an authorization request header.

## Obtain access token

An access token can either be requested using a manual request or by using an
OAuth2 compatible client.

### Request

To request an access token, a POST request should be done to the access token
API. The body should contain the username, password, grant type and optional
scope. Example, to request an access token for the user `tenant` with password
`secret` and scope `tenant/tenant`:

```http
POST https://api.itslanguage.nl/tokens HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json

grant_type=password&username=tenant&password=secret&scope=tenant%2Ftenant
```

Note the `Content-Type` of the POST.

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache

{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.nxowLE6zdaUjmiZKP-9K8OaXGUM_6O7LuHgUZgyAY9c",
    "token_type": "Bearer",
    "scope": "tenant/tenant"
}
```

## Using the access token

The access token can be used to make an authorised request. To do so, the
access token should be placed in the Authorization header as a bearer token.
Example:

```http
GET https://api.itslanguage.nl/organisations HTTP/1.1
Accept: application/json
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.nxowLE6zdaUjmiZKP-9K8OaXGUM_6O7LuHgUZgyAY9c
```


# Tenant client authentication

Instead of sharing the tenant's principal and credentials, a tenant client
should request or receive an access token from the tenant server. This should
usually happen when an end-user logs into the tenant server. How this is done
is to be determined by the tenant. This access token can be used by the client
to authenticate on behalf of the tenant at the REST API or the Websocket
server. By issuing the access token to a tenant client, the tenant server
grants the tenant client access to the ITSLanguage platform.

In order to dispense an access token to the tenant client, the tenant server
should request a token from the REST API. A token can be requested at three
levels, tenant level, organisation level or student level.

## Student level

This is the recommended way to request an access token. This way the access
token is bound to a specific student so the token can only be used by that
student. The tenant server should request an access token with a special
scope. A student scope for the student `joe` in organisation `org` owned by
tenant `tenant` should look like this:
`tenant/tenant/organisation/org/student/joe`

This method should be used in production as it is the most secure method. It
provides isolation at student level. This means that each student receives a
different access token. Students cannot access another student's data.

## Organisation level

Using this method, an access token is issued for an organisation. This access
token can be used by each student in that organisation. All students in that
organisation make use of the same account (dummy). This also means that
students have access to each others data.

When this method is chosen, a dummy student is created so the access token can
be used. When an API call requires a student, the id `dummy` needs to be
supplied.

To create an organisation level access token for the organisation `org` owned
by the tenant `tenant`, the scope should be `tenant/tenant/organisation/org`.

## Tenant level

A tenant level access token can be requested to perform administrational tasks
like creating organisations. It is also possible to perform analyses on
behalf of the tenant. There is no distinction between organisations or students
so **all** students of all organisations within that tenant use the same
account.

To make this work, a dummy organisation and a dummy student are created. When
an API call requires an organisation or a student, the id `dummy` can be given
for the organisation and the student.

To create a tenant level access token for the tenant `tenant` the scope should
be `tenant/tenant`.