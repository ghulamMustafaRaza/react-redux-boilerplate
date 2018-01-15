import { $get } from '../../services'

class App {
    HELLO = 'HELLO';
    HELLO_END = 'HELLO_END';
    HELLO_ERR = 'HELLO_ERR';
    hello = ($action, store) =>
        $action.ofType(this.HELLO)
            .switchMap(() =>
                $get('/posts')
                    .map(({response: payload}) => ({ type: this.HELLO_END, payload }))
                    .catch(err => ({ type: this.HELLO_ERR, err }))
            )
}

export default new App()