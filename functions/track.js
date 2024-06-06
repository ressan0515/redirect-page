const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const logFilePath = path.join('/tmp', 'tracking_log.txt');

    fs.appendFileSync(logFilePath, JSON.stringify({
        referrer: data.referrer,
        timestamp: data.timestamp,
        ip: event.headers['client-ip']
    }) + '\n');

    return {
        statusCode: 200,
        body: 'Success'
    };
};
