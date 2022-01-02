import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap!: FaceSnap;

  //title!: string;
  //description!: string;
  //imageUrl!: string;
  //createDate!: Date;
  //statusSnap!: boolean;
  //snaps!: number;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router){
  }

  ngOnInit(){
    //this.title = 'Le CSS';
    //this.description = 'Tout un art !';
    //this.imageUrl = "https://images.unsplash.com/photo-1545315003-c5ad6226c272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHl8fHx8fHwxNjQwODM5OTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300";
    //this.createDate = new Date;
    //this.statusSnap = false;
    //this.snaps = 4;
    this.buttonText = "J'aime";
  }

  onSnap(){
    //this.snaps++;
    this.FaceSnap.statusSnap ? (this.faceSnapsService.unSnapFaceSnapById(this.FaceSnap.id), this.FaceSnap.statusSnap = false, this.buttonText = "J'aime") : (this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id), this.FaceSnap.statusSnap = true, this.buttonText = "J'aime pas");
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.FaceSnap.id}`)
  }
}
