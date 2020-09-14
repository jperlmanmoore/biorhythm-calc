import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  
  IonItem,
  IonLabel,
  IonDatetime,
  
} from '@ionic/react';
import React, { useState } from 'react';
import { BiorhythmCard } from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {

  // const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
        <IonInput value={name}
        onIonChange={(event) => setName(event.target.value)}
        />
        </IonItem> */}
        <IonItem>
          <IonLabel position='fixed'>Date of Birth</IonLabel>
        <IonDatetime displayFormat="D MMM YYYY"
        value={birthDate}
        onIonChange={(event) => setBirthDate(event.detail.value)}
        />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target Date</IonLabel>
        <IonDatetime displayFormat="D MMM YYYY"
        value={targetDate}
        onIonChange={(event) => setTargetDate(event.detail.value)}
        />
        </IonItem>
          {/* <p>Name: {name}</p> */}
          {/* <p>Date of Birth: {dateOfBirth} </p> */}
          {birthDate &&
         <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>}
      </IonContent>
    </IonApp>
  );
}

export default App;
