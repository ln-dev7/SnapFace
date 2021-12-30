import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  // mySnap!: FaceSnap;
  // otherSnap!: FaceSnap;
  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'PC ',
        description: 'Ordinateur de travail personnel',
        imageUrl: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNjQwODY4MTA3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
        createDate: new Date(),
        statusSnap: false,
        snaps: 30,
        location: 'My Zone'
      },
      {
        title: 'La joie',
        description: 'Il faut toujours etre en joie !',
        imageUrl: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHl8fHx8fHwxNjQwODM5OTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
        createDate: new Date(),
        statusSnap: false,
        snaps: 200,
        location: 'Logbessou'
      },
      {
        title: 'La tchop',
        description: 'Manger c\'est bien :)',
        imageUrl: 'https://images.unsplash.com/photo-1565895405140-6b9830a88c19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWF0fHx8fHx8MTY0MDg2ODMyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
        createDate: new Date(),
        statusSnap: false,
        snaps: 90
      }
    ];
    // this.mySnap = ;
    // this.otherSnap = ;
  }
}



// Ceci c'est lorsqu'on a un constructor dansle face-snap-model
// export class AppComponent implements OnInit {
//   mySnap!: FaceSnap;
//   otherSnap!: FaceSnap;
//   ngOnInit() {
//     this.mySnap = new FaceSnap(
//       'La joie',
//       'Il faut toujours etre en joie !',
//       'https://images.unsplash.com/photo-1545315003-c5ad6226c272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHl8fHx8fHwxNjQwODM5OTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
//       new Date(),
//       false,
//       4
//     );
//     this.otherSnap = new FaceSnap(
//       'Les pattes',
//       'Manger c\'est bien :)',
//       'https://images.unsplash.com/photo-1536540166989-ad5334cee5f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWF0fHx8fHx8MTY0MDg0NDQxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
//       new Date(),
//       false,
//       13
//     );
//   }
// }
