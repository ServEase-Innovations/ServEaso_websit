// Configuration for different environments
const config = {
  development: {
    bookingAppUrl: 'http://localhost:3000',
  },
  production: {
    bookingAppUrl: 'https://www.serveaso.com/book',
  },
};

// Determine environment
const env = import.meta.env.MODE || 'development';

export const BOOKING_APP_URL = config[env]?.bookingAppUrl || config.development.bookingAppUrl;

export default {
  BOOKING_APP_URL,
};
