import moment from 'moment';
moment.locale('pt-br');

export const formatDateMonthYear = (date: string): string => moment(date).format('MMM[ de] YYYY');
