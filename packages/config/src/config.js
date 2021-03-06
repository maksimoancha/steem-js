/**
 * @module @blocker/steem-config
 */

// imports.
import { get } from 'lodash'

// application import.
import Application from './application'

/**
 * Config class.
 */
class Config {
  /**
   * Config constructor.
   *
   * @param {{apiURL,cache,app}} options List of options to set.
   */
  constructor (options = { apiURL: null, cache: null, app: null }) {
    // Steem API RPC URL (https).
    this.apiURL = get(options, 'apiURL', 'https://api.steemit.com')
    // enable / disable caching common resources.
    this.cache = get(options, 'cache', true)
    // application instance or factory a null one.
    this.app = get(options, 'app', new Application())
  }
}

// default export.
export default Config
