import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {RobotMaster, RobotmastersService} from '../robotmasters.service'
import {Stage, StagesService} from '../stages.service'
import {formatDate } from '@angular/common';
import {PlayersService} from '../players.service'

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  match = {
    'stage':undefined,
    'gametitle':undefined,
    'gamemode':undefined,
    'totalplayers':1}
  players = {
    player1:{},
    player2:{},
    player3:{},
    player4:{},
    player5:{},
    player6:{},
    player7:{},
    player8:{},
    player9:{},
    player10:{}
  }


  robotmasters: RobotMaster[];
  stages: Stage[];
  playernames: any[];
  public totalPlayers = 10;
  gameMode:string;
  today= new Date();
  jstoday = '';
  submitVerified = false
  constructor(private playersService: PlayersService,private _authSerice:AuthService, private _router:Router,private robotmasterService: RobotmastersService,private stageService: StagesService) {
    
  }



  ngOnInit() {
    this._authSerice.getSubmitVerification().subscribe(
      res=>this.submitVerified = res,
      err=>{
        if (err instanceof HttpErrorResponse){
          if(err.status ===401){
            this._router.navigate(['/login'])
          }
        }
      }
    )


    this.robotmasterService.getRobotMasters().subscribe(

      res => {this.robotmasters = res;}
  )


  this.stageService.getStages().subscribe(
    res => {this.stages = res})
  }











}
