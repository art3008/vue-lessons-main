export default {
    filters: {
        formatDate(value) {
            return Intl.DateTimeFormat('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format(new Date(value))
        }
    }
}