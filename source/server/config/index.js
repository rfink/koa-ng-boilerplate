
module.exports = require('envcfg')({
  '*': {
    'port': process.env.PORT || 3500,
    'redis': {
      'port': 6379,
      'host': 'localhost'
    },
    'session': {
      'secret': 'TehS3cr3tG035H3Ar:(:):P',
      'name': 'sid',
      'maxAge': (1000 * 60 * 60 * 24 * 180)
    },
    'timeout': 5000
  },
  'test': {

  },
  'production': {
    'redis': {
      'port': 6379,
      'host': 'localhost'
    }
  }
});
