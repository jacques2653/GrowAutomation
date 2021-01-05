var schedule = require('node-schedule');
var CronJob = require('cron').CronJob;

const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });

const temperature = require('./classes/temperature.class')

const main = async () => {

    const getTemperature = new CronJob('*/5 * * * * *', function() {
        temperature.readTemperature().then(result => {
            io.emit('temperature', result.toFixed(2));
        })
    });

    console.log('Starting cron jobs')
    getTemperature.start()
}

main()