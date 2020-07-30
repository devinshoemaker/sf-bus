import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/react';
import { useRouteList } from '@sf-bus/core-data';
import React from 'react';
import { useRecoilState } from 'recoil';
import routeTagsState from '../../atoms/route-tags-state';

export interface RouteListProps {
  searchText: string;
}

interface Route {
  title: string;
  tag: string;
}

export const RouteList = (props: RouteListProps) => {
  const [routeTags, setRouteTags] = useRecoilState(routeTagsState);
  const { data, isLoading } = useRouteList();

  const setRouteTag = (routeTag: string, checked: boolean) => {
    if (checked && !routeTags.includes(routeTag)) {
      setRouteTags([...routeTags, routeTag]);
    }

    if (!checked && routeTags.includes(routeTag)) {
      setRouteTags(routeTags.filter((tag) => tag !== routeTag));
    }
  };

  if (!isLoading) {
    return (
      <IonList>
        {data.route
          .filter((route: Route) =>
            route.title.toLowerCase().includes(props.searchText.toLowerCase())
          )
          .map((route: Route) => (
            <IonItem key={route.tag}>
              <IonLabel>{route.title}</IonLabel>
              <IonCheckbox
                checked={routeTags.includes(route.tag)}
                onIonChange={(e) => setRouteTag(route.tag, e.detail.checked)}
              />
            </IonItem>
          ))}
      </IonList>
    );
  } else {
    return null;
  }
};

export default RouteList;
