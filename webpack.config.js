const webpack = require('webpack')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const PACKAGE_INFO = require('./package.json')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PUBLISH = process.env.PUBLISH ? Boolean(process.env.PUBLISH) : false

const ENV = process.env.NODE_ENV
const PUBLISH = process.env.PUBLISH

const IS_DEVELOPMENT = (ENV === 'development')
const DEVELOPMENT_HOST = process.env.DEVELOPMENT_HOST || 'http://localhost'
const DEVELOPMENT_PORT = process.env.DEVELOPMENT_PORT || 8080
