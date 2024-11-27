const globals = require("node-global-storage");

const globaDataSet = (tokenResult) => {
  let currentDateTime = new Date();
  globals.set("created_at", currentDateTime, { protected: true });
  globals.set("id_token", tokenResult.id_token, { protected: true });
  globals.set("refresh_token", tokenResult.refresh_token, { protected: true });
  globals.set("expires_in", (tokenResult.expires_in - 100) * 1000, {
    protected: true,
  });
};

module.exports = globaDataSet;

// class GlobalDataService {
//   /**
//    * Namespace for storing sensitive token-related data
//    * @private
//    */
//   static #TOKEN_NAMESPACE = 'bkash_auth';

//   /**
//    * Store token data with additional security and management features
//    * @param {Object} tokenResult - Token response from authentication
//    * @param {Object} [options={}] - Additional configuration options
//    */
//   static setTokenData(tokenResult, options = {}) {
//     const {
//       namespace = this.#TOKEN_NAMESPACE,
//       expirationBuffer = 100 // Default 100 seconds buffer
//     } = options;

//     // Validate token result
//     if (!this.#validateTokenResult(tokenResult)) {
//       throw new Error('Invalid token result structure');
//     }

//     const currentDateTime = new Date();

//     // Prepare token data with enhanced metadata
//     const tokenData = {
//       id_token: tokenResult.id_token,
//       refresh_token: tokenResult.refresh_token,
//       created_at: currentDateTime,
//       expires_at: new Date(currentDateTime.getTime() +
//         ((tokenResult.expires_in - expirationBuffer) * 1000)),
//       original_expires_in: tokenResult.expires_in
//     };

//     // Store each piece of data with protection
//     Object.entries(tokenData).forEach(([key, value]) => {
//       globals.set(`${namespace}_${key}`, value, {
//         protected: true
//       });
//     });

//     return tokenData;
//   }

//   /**
//    * Retrieve stored token data
//    * @param {Object} [options={}] - Retrieval configuration
//    * @returns {Object|null} Retrieved token data or null
//    */
//   static getTokenData(options = {}) {
//     const {
//       namespace = this.#TOKEN_NAMESPACE
//     } = options;

//     try {
//       return {
//         id_token: globals.get(`${namespace}_id_token`),
//         refresh_token: globals.get(`${namespace}_refresh_token`),
//         created_at: globals.get(`${namespace}_created_at`),
//         expires_at: globals.get(`${namespace}_expires_at`),
//         original_expires_in: globals.get(`${namespace}_original_expires_in`)
//       };
//     } catch (error) {
//       console.warn('No token data found or error retrieving data', error);
//       return null;
//     }
//   }

//   /**
//    * Check if current token is valid
//    * @returns {boolean} Whether the token is currently valid
//    */
//   static isTokenValid() {
//     const tokenData = this.getTokenData();
//     if (!tokenData || !tokenData.expires_at) return false;

//     return new Date() < new Date(tokenData.expires_at);
//   }

//   /**
//    * Clear stored token data
//    * @param {Object} [options={}] - Clearing configuration
//    */
//   static clearTokenData(options = {}) {
//     const {
//       namespace = this.#TOKEN_NAMESPACE
//     } = options;

//     const tokenKeys = [
//       'id_token',
//       'refresh_token',
//       'created_at',
//       'expires_at',
//       'original_expires_in'
//     ];

//     tokenKeys.forEach(key => {
//       try {
//         globals.remove(`${namespace}_${key}`);
//       } catch (error) {
//         console.warn(`Error clearing ${key}`, error);
//       }
//     });
//   }

//   /**
//    * Validate the structure of token result
//    * @private
//    * @param {Object} tokenResult - Token result to validate
//    * @returns {boolean} Whether the token result is valid
//    */
//   static #validateTokenResult(tokenResult) {
//     return !!(
//       tokenResult &&
//       tokenResult.id_token &&
//       tokenResult.refresh_token &&
//       tokenResult.expires_in
//     );
//   }
// }

// module.exports = GlobalDataService;
