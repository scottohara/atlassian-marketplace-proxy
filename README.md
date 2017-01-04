atlassian-marketplace-proxy
===========================

Atlassian's Marketplace Data API supports CORS (by specifying `Access-Control-Allow-*` headers), however it unfortunately doesn't support CORS preflight requests because `OPTIONS` is not a supported method (`Access-Control-Allow-Methods:HEAD, PUT, GET, POST, DELETE`).

When calling the API using `fetch()`, browsers will trigger a preflight even for a `GET` request, because of the `Authorization` header that the API requires.

An [issue](https://ecosystem.atlassian.net/browse/AMKT-19489) has been logged with Atlassian, but in the meantime this service can be used to proxy requests from the browser through to the API and avoid any CORS issues.