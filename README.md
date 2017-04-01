# Access Request

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/access-request.svg)](https://greenkeeper.io/)

Access Request that can be used in authorization libraries such as [permit-authorize](https://github.com/kristianmandrup/permit-authorize)

## Usage

Here using [LiveScript](livescript.net) syntax ;)

```js
request =
  user:
    role: 'admin'
  action: 'read'
  subject: book
  ctx:
    domain: 'main'

AccessRequest.from(request)
```

Alternatively, create by sending each argument separately:

`new AccessRequest(user, 'read', book, {domain: 'admin'})`

The library uses [fingerprint](https://github.com/kristianmandrup/fingerprint) to add a `fingerprint` method
to the access request, so that it is efficient to cache and re-identify in various scenarios.

### Test

The tests are written for mocha and mostly use chai expect and should as test DSLs to write the specs.

`mocha test`

## Install

Include

## Licence

MIT License
Copyright 2014-2015 Kristian Mandrup

See LICENSE file