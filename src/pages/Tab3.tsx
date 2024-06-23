import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>


        </IonHeader>
         <div className='mycontainer'>
          <div className='innerContainer'>
            
            <div className='profile'>
            
             <img src="image.png" height={148}  width={148}
             />


             <h3>Code School</h3>
             <h4>code@ionic.com</h4>

             
            <button className='btn'>Followers</button>
            <button className='btnlogout'>Logout</button>


            </div>
            </div>

    


         </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
