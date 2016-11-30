# Tenant server authentication

Each tenant will receive a set of secrets called principal and credentials.
The principal is a unique identifier (like a username) and the credentials are
a secret, only the tenant should know (a password). A tenant can authenticate
using these secrets.

The secrets are sent in an HTTP Form string to request an OAuth2 Token.
See [OAuth2](oauth2.md)