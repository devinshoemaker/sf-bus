import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPopover,
} from '@ionic/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import routeTagsState from '../../atoms/route-tags-state';
import { Bus } from '../../interfaces/bus';

export interface BusPopoverProps {
  showPopover: boolean;
  onDidDismiss: () => void;
  selectedBus: Bus;
}

export const BusPopover = (props: BusPopoverProps) => {
  const [, setRouteTags] = useRecoilState(routeTagsState);

  const setRouteTag = (routeTag: string) => {
    setRouteTags([routeTag]);
    props.onDidDismiss();
  };

  return (
    <IonPopover isOpen={props.showPopover} onDidDismiss={props.onDidDismiss}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Bus: {props.selectedBus.id}</IonCardTitle>
          <IonCardSubtitle
            onClick={() => setRouteTag(props.selectedBus.routeTag)}
            color="primary"
          >
            Route: {props.selectedBus.routeTag}
          </IonCardSubtitle>
          <IonCardContent>
            <strong>Speed (km/h):</strong> {props.selectedBus.speedKmHr}
            <br />
            <strong>Latitude:</strong> {props.selectedBus.lat}
            <br />
            <strong>Longitude:</strong> {props.selectedBus.lon}
            <br />
            <strong>Seconds since update:</strong>{' '}
            {props.selectedBus.secsSinceReport}
            <br />
          </IonCardContent>
        </IonCardHeader>
      </IonCard>
    </IonPopover>
  );
};

export default BusPopover;
