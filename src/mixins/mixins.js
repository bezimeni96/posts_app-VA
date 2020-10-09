import moment from 'moment'

export const dateMixin = {
    filters: {
        formatDate (date, str = 'YYYY-MM-DD HH:mm:ss') {
            return moment(date).format(str)
        },

        diffForHumans (date) {
            return moment(date).fromNow();
        }
    }
}