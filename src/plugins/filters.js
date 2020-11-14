import Vue from 'vue';

Vue.filter('price', (value) => {
    const intl = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
    return intl.format(value);
});
