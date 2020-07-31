import {
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { compassOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import RouteListPopover from '../route-list-popover/route-list-popover';

export const SfBusToolbar = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<Event>();

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  return (
    <IonToolbar>
      <IonButtons slot="end">
        <IonButton onClick={presentPopover}>
          <IonIcon icon={compassOutline}></IonIcon>
        </IonButton>
      </IonButtons>
      <RouteListPopover
        showPopover={showPopover}
        popoverEvent={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      />
      <IonTitle>The Bus Thing</IonTitle>
    </IonToolbar>
  );
};

export default SfBusToolbar;
