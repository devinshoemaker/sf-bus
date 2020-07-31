import { IonPopover, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import RouteList from '../route-list/route-list';

export interface RouteListPopoverProps {
  showPopover: boolean;
  popoverEvent: Event;
  onDidDismiss: () => void;
}

export const RouteListPopover = (props: RouteListPopoverProps) => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPopover
      isOpen={props.showPopover}
      event={props.popoverEvent}
      onDidDismiss={props.onDidDismiss}
    >
      <IonSearchbar onIonChange={(e) => setSearchText(e.detail.value)} />
      <RouteList searchText={searchText} />
    </IonPopover>
  );
};

export default RouteListPopover;
