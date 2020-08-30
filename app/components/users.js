import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UsersComponent extends Component {
    @action
     showUser(user) {
        alert(`The person's name is ${user}!`);
    }
}