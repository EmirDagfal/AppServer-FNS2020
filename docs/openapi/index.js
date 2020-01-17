const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/openapi/openapi.yaml');

module.exports = swaggerDocument;