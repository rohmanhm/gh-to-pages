'use strict'

/**
 * Find username and repo from given GitHub URL
 * 
 * @export
 * @param {string} url 
 * @returns {Object}
 */
 function findUsernameAndRepo (ghurl) {
  const RootRe = /((https?:\/\/)?github.com\/|git@github.com:)/g
  const GitExtRe = /.git$/g
  // Example
  // git@github.com:rohmanhm/gh-to-pages.git => rohmanhm/gh-to-pages
  // https://github.com/rohmanhm/gh-to-pages => rohmanhm/gh-to-pages
  const ghShortURL = GitExtRe.test(ghurl)
    ? ghurl.replace(RootRe, '').replace(GitExtRe, '')
    : ghurl.replace(RootRe, '')

   const [username, repo] = ghShortURL.split('/')

   return { username, repo }
}

/**
 * Convert GitHub URL to GitHub Pages
 * 
 * @param {any} ghurl 
 * @returns 
 */
module.exports = function (ghurl) {
  const ghPages = 'github.io'
  const { username, repo } = findUsernameAndRepo(ghurl)
  const rootGhPages = `https://${username}.${ghPages}`
  if (rootGhPages === repo) {
    return rootGhPages
  }

  return `${rootGhPages}/${repo}`
}

module.exports.findUsernameAndRepo = findUsernameAndRepo
