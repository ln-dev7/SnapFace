import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'PC ',
      description: 'Ordinateur de travail personnel',
      imageUrl: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNjQwODY4MTA3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      createDate: new Date(),
      statusSnap: false,
      snaps: 30,
      location: 'My Zone'
    },
    {
      id: 2,
      title: 'La joie',
      description: 'Il faut toujours etre en joie !',
      imageUrl: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHl8fHx8fHwxNjQwODM5OTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      createDate: new Date(),
      statusSnap: false,
      snaps: 200,
      location: 'Logbessou'
    },
    {
      id: 3,
      title: 'La tchop',
      description: 'Manger c\'est bien :)',
      imageUrl: 'https://images.unsplash.com/photo-1565895405140-6b9830a88c19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWF0fHx8fHx8MTY0MDg2ODMyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      createDate: new Date(),
      statusSnap: false,
      snaps: 90
    }
  ];

  // snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
  //   const faceSnap = this.getFaceSnapById(faceSnapId);
  //   snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  // }

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap pas touve !')
    }
  }

  unSnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
    if (faceSnap) {
      faceSnap.snaps--;
    } else {
      throw new Error('FaceSnap pas touve !')
    }
  }
}



