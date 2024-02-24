module.exports = {
  async redirects() {
    return [
      {
        source: '/giving-up-on-css',
        destination: '/posts/giving-up-on-css',
        permanent: true,
      },
      {
        source: '/til/i-can-be-good-at-things',
        destination: '/posts/getting-good-at-things',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/now',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
