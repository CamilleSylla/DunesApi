module.exports = ({ env }) => ({
    apiToken: {
      salt: env('API_TOKEN_SALT', 'nchebfhrbfhebfjskndoekdkzkfjrfourhfzjfd'),
    },
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fkjnejnhjdnfnjdnfsezrdskqdirodelnf'),
    },
  })