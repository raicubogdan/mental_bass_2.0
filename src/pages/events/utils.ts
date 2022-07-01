import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebaseDb/config';
import { GetEventArgs } from './types';

const getEvent = async({attribute, setEvent, toEqual}: GetEventArgs) => {
  const ref = collection(db, 'events');
  
  getDocs(ref).then(snapshot => {
    const results: any = [];
    snapshot.docs.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() });
    });
    const filteredResults = results.filter((event: any) => {
      return event[attribute] === toEqual;
    });
    setEvent(filteredResults[0]);
  });
}

export default getEvent