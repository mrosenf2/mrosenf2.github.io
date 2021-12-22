/**
 * @typedef PhotoDateTime
 * @property {Number} timestamp
 * @property {String} formatted
 */

/**
 * @typedef GeoData
 * @property {number} geoData.latitude
 * @property {number} geoData.longitude
 * @property {number} geoData.altitude
 * @property {number} geoData.latitudeSpan
 * @property {number} geoData.longitudeSpan
 * @property {boolean} geoData.guess
 */

/**
 * @typedef {object} PhotoData
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {string} imageViews
 * @property {PhotoDateTime} creationTime
 * @property {PhotoDateTime} modificationTime
 * @property {GeoData} geoData
 * @property {GeoData} geoDataExif
 * @property {PhotoDateTime} photoTakenTime
 */