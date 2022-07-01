import React from 'react';

export interface GetEventArgs {
  attribute: string;
  setEvent: React.Dispatch<React.SetStateAction<Event>>
  toEqual: string | boolean | undefined
}