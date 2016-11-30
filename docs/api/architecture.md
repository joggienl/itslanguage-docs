# Steaming cloud architecture

{% aafigure --textual --scale=.6 %}
                                                                    +------------------------+
                                                                    |                        |
                                                                    | Google Cloud Storage   |
                                                                    |                        |
                                                                    +---+--------------------+
                                                                        |
                                                      +-----------------+
                                                      |
+--------------------+            +-------------------+--+          +------------------------+
|                    |            |                      |          |                        |
| Tenant             +------------+ Google App Engine    +----------+ Google Cloud Datastore |
|                    |            |                      |          |                        |
+--+-----------------+            +-+-----------------+--+          +------------------------+
   |                                |                 |
   |               +----------------+                 |
   |               |                                  |
+--+---------------+-+            +-------------------+--+
|                    |            |                      |
| Student            +------------+ Google Managed VMs   |
|                    |            |                      |
+--------------------+            +----------------------+
{% endaafigure %}

## Components and actors

### Tenant

A client corporation using the ITSLanguage REST API to perform CRUD
operations on organisations, students, challenges.

### Student

An actor performing the audio recordings. A student belongs to an organisation
(a school). This organisation is a client corporation of the tenant.

A student connects with the:

* REST API to retrieve challenge metadata (e.g. reference audio).
* Websocket API to submit recorded audio.

### Google Managed VMs

* Websocket server listening for students connecting to receive and process audio.

### Google App Engine

REST API to interface with tenants and students performing administrative tasks.

### Google Cloud Storage

Storage for submitted audio.

### Google Cloud Datastore

NoSQL datastore for all non-binary data.
