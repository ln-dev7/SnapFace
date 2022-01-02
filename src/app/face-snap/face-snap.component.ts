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
  @Input()FaceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router){
  }

  ngOnInit(){
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
