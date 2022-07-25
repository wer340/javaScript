const newman = require('newman');

newman.run({
    collection: './postman_collection.json',
    reporters: ['htmlextra', 'csv']
}, process.exit);