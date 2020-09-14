import dayjs from 'dayjs';
import React from 'react';
import {IonCard, 
    IonHeader, 
    IonCardContent, 
    IonCardTitle} from '@ionic/react';

import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
};

export function BiorhythmCard( {birthDate, targetDate}) {
  const {physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate)
    return (
        <div>
             <IonCard className="biorhythm-card ion-text-center">
            <IonHeader>
              <IonCardTitle> {formatDate(targetDate)} </IonCardTitle>
            </IonHeader>
            <IonCardContent>
              <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
              <p className="physical">Physical: {physical.toFixed(4)}</p>
              <p className="emotional">emotional: {emotional.toFixed(4)} </p>
              <p className="intellectual">Intellectual: {intellectual.toFixed(4)} </p>
            </IonCardContent>
          </IonCard>
        </div>
    );
};