// release.config.cjs
module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:emulsify-ds/emulsify-twig-extensions.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'eslint',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        writerOpts: {
          commitsSort: ['subject', 'scope']
        }
      }
    ],
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github'
  ]
}
