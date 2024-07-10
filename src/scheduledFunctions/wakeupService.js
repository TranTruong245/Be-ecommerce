const CronJob = require('node-cron');
import axios from '../utils/axios';
exports.initScheduledJobs = () => {
	const scheduledJobFunction = CronJob.schedule('*/10 * * * *', async () => {
		const response = await axios.get('/');
		console.log(response);
	});

	scheduledJobFunction.start();
};
