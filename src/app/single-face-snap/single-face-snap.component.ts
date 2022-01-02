import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  FaceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = "J'aime";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.FaceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    this.FaceSnap.statusSnap ? (this.faceSnapsService.unSnapFaceSnapById(this.FaceSnap.id), this.FaceSnap.statusSnap = false, this.buttonText = "J'aime") : (this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id), this.FaceSnap.statusSnap = true, this.buttonText = "J'aime pas");
  }

}
