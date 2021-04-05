import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


export interface MostPlayedRM{
icon:"",
id:1,
rmname:"",
total:1
}

export interface PlayerDetails{
  id:1,
  name:""
}

export interface MatchesTotal{
  DM:1,
  Duels:1,
  Matches:1,
  Series:1,
  TDM:1,
  TLMS:1
}



export interface PlayerTotals{
  avgPlacement:{"total":1},
  bestFrags:{"frags": 1,
  "icon": "",
  "id": 1,
  "matchid": 1},
  bestWins:{"",
  "id": 1,
  "matchid": 1,
  "wins": 1},
  favoriteMode:{"gamemode": "",
  "total": 1},
  favoriteRM:{"icon": "",
  "id": 1,
  "rmname": "",
  "total": 1},
  matches:{ "total": 1},
  totalFrags:{ "total": 1},
  totalLoss:{ "total": 1},
  totalWins:{ "total": 1},
  wlRatio:{"total": 1},
  worstFrags:{"frags": 1,
  "icon": "",
  "id": 1,
  "matchid": 1},


}

export class PlayersService {
  getPlayerTotals(player: String) {
    return this.http.get<PlayerTotals>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/totals`)
  }


  private _playersUrl = "https://mm8bitdm-v2.herokuapp.com/api/players"
  constructor(private http:HttpClient,private _router:Router) { }
  getPlayers(){
    return this.http.get<any[]>(this._playersUrl);
  }
  getPlayer(player:string){
    return this.http.get<PlayerDetails>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}`)
  }

  getRecentMatches(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/recentmatches/${player}`)
  }

  getRecentDM(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/recentmatches/dm/${player}`)
  }

  getRecentDuels(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/recentmatches/duels/${player}`)
  }

  getMatchesTotals(player:string){
    return this.http.get<MatchesTotal>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/matchtotals`)
  }

  getMostPlayedRM(player: string) {
    return this.http.get<MostPlayedRM>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/mostplayedrm`)
  }

  get5MostPlayedRM(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/5mostplayedrm`)
  }

  getPlayerMatches(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/matches`)
  }

  getPlayerRM(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/robotmasters`)
  }


  getPeers(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/peers`)
  }

  getPeers5(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/players/${player}/peers5`)
  }


}

