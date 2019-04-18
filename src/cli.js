#!/usr/bin/env node

import meow from 'meow';

import cordovaSetVersion from '.';

const help = `
    Usage
      $ cordova-set-version [-v|--version <version>] [-b|--build-number <build-number>] [-w|--windows <version>] [config.xml]
    
    Options
      -v, --version Version to set
      -b, --build-number Build number to set
      -w, --windows Windows version to set
      
    Examples
      $ cordova-set-version -v 2.4.9
      $ cordova-set-version -b 86
      $ cordova-set-version -v 2.4.9 -b 86
      $ cordova-set-version -v 2.4.9 -b 86 -w 1.1.1
`;

const options = {
    flags: {
        version: {
            type: 'string',
            alias: 'v'
        },
        buildNumber: {
            type: 'number',
            alias: 'b'
        },
        windows: {
          type: 'string',
          alias: 'w'
        }
    },
    help,
    autoVersion: false
};

const cli = meow(options);

const filename = cli.input[0] || null;
const version = cli.flags.version || null;
const buildNumber = +cli.flags.buildNumber || null;
const windowsVersion = cli.flags.windows || null;
console.log(windowsVersion)
cordovaSetVersion(filename, version, buildNumber, windowsVersion);
