require '../../test_setup'

Book            = require '../../fixtures/book'
index           = require '../../../'
AccessRequest   = index.AccessRequest
fingerprint     = index.fingerprint
FingerPrinter   = fingerprint.ArrayFingerPrint

describe 'ArrayFingerPrint' ->
  var access-request

  finger-printer = (ar, debug = true) ->
    new FingerPrinter ar, debug

  before ->
    access-request := ['hello', 'goodbye']

  describe 'fingerprint' ->
    specify 'makes a fingerprint' ->
      res = finger-printer(access-request).fingerprint!
      res.should.eql 'hello.goodbye'


