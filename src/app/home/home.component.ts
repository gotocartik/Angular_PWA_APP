import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PwaServiceService } from '../pwa-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private APIData: ApiService, public Pwa: PwaServiceService) { }
  business: any = [];
  journal: any = [];
  tech: any = [];
  india: any = [];
  bitcoin: any = [];
  loaded: any = false;

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.loaded = false;
    this.APIData.getBussiness().subscribe((response) => {
      console.log("response", response)
      this.business = response;
      this.business = this.business.articles;
      this.loaded = true
    })

    this.APIData.getTech().subscribe((response) => {
      console.log("response", response)
      this.tech = response;
      this.tech = this.tech.articles;
    })

    this.APIData.getjournal().subscribe((response) => {
      console.log("response", response)
      this.journal = response;
      this.journal = this.journal.articles;
    })
    this.APIData.getIndia().subscribe((response) => {
      console.log("response", response)
      this.india = response;
      this.india = this.india.articles;
    })
    this.APIData.getBitcoin().subscribe((response) => {
      console.log("response", response)
      this.bitcoin = response;
      this.bitcoin = this.bitcoin.articles;
    })
  }

}
