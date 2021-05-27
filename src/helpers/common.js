/**
 * Author: Lakshman Veti
 * Type: Utility
 * Objective: To provide utility functions
 * Associated Route/Usage: Global
*/

/**
 *  return authorization header with basic auth credentials
 */
export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}