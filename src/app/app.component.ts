import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  otherSnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title: 'La joie',
      description: 'Il faut toujours etre en joie !',
      imageUrl: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHl8fHx8fHwxNjQwODM5OTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      createDate: new Date(),
      statusSnap: false,
      snaps: 4,
      location: 'Logbessou'
    };
    this.otherSnap = {
      title: 'Les pattes',
      description: 'Manger c\'est bien :)',
      imageUrl: 'https://images.unsplash.com/photo-1536540166989-ad5334cee5f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWF0fHx8fHx8MTY0MDg0NDQxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      createDate: new Date(),
      statusSnap: false,
      snaps: 13
    };
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
