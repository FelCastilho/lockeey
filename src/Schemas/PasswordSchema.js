export default class PasswordSchema extends Realm.Object{
    static schema = {
        name: 'Passwords',
        primaryKey: 'id',
        properties:{
            id: {type: 'int', indexed: true},
            passwordItem: 'string'
        }

    }
}