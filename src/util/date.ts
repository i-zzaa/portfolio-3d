import moment from 'moment';
moment.locale('pt');

export const formatDateMonthYear = (date: string): string => moment(date).format('MM[ de] YYYY');
