import test from 'ava'
const ghToPages = require('./')
const { findUsernameAndRepo } = ghToPages

test.beforeEach(t => {
  t.context.ghURL = [
    'https://github.com/rohmanhm/gh-to-pages',
    'http://github.com/rohmanhm/gh-to-pages',
    'github.com/rohmanhm/gh-to-pages',
    'git@github.com:rohmanhm/gh-to-pages.git'
  ]
})

test('findUsernameAndRepo should return correct username and repo', t => {
  t.context.ghURL.map(item => {
    const ur = findUsernameAndRepo(item)
    t.truthy(findUsernameAndRepo)
    t.is(typeof findUsernameAndRepo, 'function')
    t.is(typeof ur, 'object')
    t.is(ur.username, 'rohmanhm')
    t.is(ur.repo, 'gh-to-pages')
  })
})

test('should return correct gh-pages', t => {
  t.context.ghURL.map(item => {
    const actual = ghToPages(item)
    t.truthy(ghToPages)
    t.is(typeof ghToPages, 'function')
    t.is(actual, 'https://rohmanhm.github.io/gh-to-pages')
  })
})
