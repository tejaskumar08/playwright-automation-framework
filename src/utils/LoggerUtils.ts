import { configure, getLogger, Logger} from 'log4js';

configure({
    appenders: {
      console: { type: 'stdout', layout: { type: 'colored' } }, // Console output with colors
      file: { type: 'file', filename: 'app.log', maxLogSize: 10485760, backups: 3 }, // Log to a file, rolling when size is reached
    },
    categories: {
      default: { appenders: ['console', 'file'], level: 'info' }, // Default category uses both appenders at 'info' level or higher
      // You can add more categories for different parts of your application
      data: { appenders: ['file'], level: 'debug' } // A specific logger that only logs to file at debug level
    }
  });

export const logger: Logger = getLogger();