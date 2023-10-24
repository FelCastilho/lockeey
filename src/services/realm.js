import Realm from 'realm';
import PasswordSchema from '../Schemas/PasswordSchema';

export default async function getRealm(){
    return await Realm.open({
        schema: [PasswordSchema]
    });
}