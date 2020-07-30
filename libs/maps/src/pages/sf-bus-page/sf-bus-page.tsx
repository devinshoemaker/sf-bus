import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import SfBusMap from '../../components/sf-bus-map/sf-bus-map';
import SfBusToolbar from '../../components/sf-bus-toolbar/sf-bus-toolbar';

export const SfBusPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <SfBusToolbar />
      </IonHeader>
      <IonContent>
        <SfBusMap />
      </IonContent>
    </IonPage>
  );
};

export default SfBusPage;
