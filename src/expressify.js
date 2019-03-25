/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable no-underscore-dangle */

const serverless = require('serverless-http');

module.exports = function expressify(app) {
  return async (params) => {
    const handler = serverless(app, {
      // eslint-disable-next-line no-use-before-define
      binary: BINARY_MEDIA_TYPES,
    });
    const event = {
      httpMethod: params.__ow_method.toUpperCase(),
      path: params.__ow_path,
      body: params.__ow_body,
      headers: params.__ow_headers,
    };
    const result = await handler(event, {});
    delete result.isBase64Encoded;
    return result;
  };
};

const BINARY_MEDIA_TYPES = [
  'audio/*',
  'image/*',
  'video/*',
  'application/base64',
  'application/excel',
  'application/font-woff',
  'application/gnutar',
  'application/java-archive',
  'application/lha',
  'application/lzx',
  'application/mspowerpoint',
  'application/msword',
  'application/octet-stream',
  'application/pdf',
  'application/postscript',
  'application/vnd.google-earth.kmz',
  'application/vnd.ms-fontobject',
  'application/vnd.oasis.opendocument.chart',
  'application/vnd.oasis.opendocument.database',
  'application/vnd.oasis.opendocument.formula',
  'application/vnd.oasis.opendocument.graphics',
  'application/vnd.oasis.opendocument.image',
  'application/vnd.oasis.opendocument.presentation',
  'application/vnd.oasis.opendocument.spreadsheet',
  'application/vnd.oasis.opendocument.text',
  'application/vnd.oasis.opendocument.text-master',
  'application/vnd.oasis.opendocument.text-web',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.presentationml.slide',
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  'application/vnd.openxmlformats-officedocument.presentationml.template',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'application/x-7z-compressed',
  'application/x-ace-compressed',
  'application/x-apple-diskimage',
  'application/x-arc-compressed',
  'application/x-bzip',
  'application/x-bzip2',
  'application/x-chrome-extension',
  'application/x-compress',
  'application/x-compressed',
  'application/x-debian-package',
  'application/x-dvi',
  'application/x-font-truetype',
  'application/x-font-opentype',
  'application/x-gtar',
  'application/x-gzip',
  'application/x-latex',
  'application/x-rar-compressed',
  'application/x-redhat-package-manager',
  'application/x-shockwave-flash',
  'application/x-tar',
  'application/x-tex',
  'application/x-texinfo',
  'application/x-x509-ca-cert',
  'application/x-xpinstall',
  'application/zip',
];
