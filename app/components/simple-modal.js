import Ember from 'ember';
import layout from './components/simple-modal';

export default Ember.Component.extend({
    actions: {
        toggleModal: function () {
            this.toggleProperty('enabled');
            // Joel wuz here!
        }
    },
    layout: layout
});