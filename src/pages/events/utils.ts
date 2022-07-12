import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebaseDb/config';
import Event from './details/types';
import { GetEventArgs } from './types';

const getFiltereCondition = (filteredAttr: string, event: Event) => {
  switch(filteredAttr) {
    case 'homeEvent':
     return event.homeEvent;
    case 'show':
      return event.show
    default:
      return event.id
  }
}

const getEvents = async ({filteredAttr, toEqual}: GetEventArgs): Promise<Event[]> => {
  const ref = collection(db, 'events');
  const results: Event[] = []

  return getDocs(ref).then(snapshot => {
    snapshot.docs.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() } as Event);
    });

    const filteredResults = results.filter((event: Event) => {
      return getFiltereCondition(filteredAttr, event) === toEqual
    });

    return filteredResults
  });
}

export default getEvents
