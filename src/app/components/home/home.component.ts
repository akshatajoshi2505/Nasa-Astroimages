// import { Component, OnInit} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from './../../environments';



import { Component, OnInit } from '@angular/core';
import { NasaImageOfTheDayService } from '../../services/nasaImageOfTheDay.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  imageUrl: string | undefined;
  hdImageUrl: string | undefined;
  title: string | undefined;
  explanation: string | undefined;
  date: string | undefined;
  copyright: string | undefined;

  constructor(private nasaImageOfTheDayService: NasaImageOfTheDayService) {}

  ngOnInit(): void {
    this.nasaImageOfTheDayService.getImageOfTheDay().subscribe(response => {
      this.imageUrl = response.url;
      this.hdImageUrl = response.hdurl;
      this.title = response.title;
      this.explanation = response.explanation;
      this.date = response.date;
      this.copyright = response.copyright;
    });
  }
}
