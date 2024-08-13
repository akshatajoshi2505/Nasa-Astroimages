import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AstronomicalSearchService } from '../../services/astronomical-search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-astronomical-search',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './astronomical-search.component.html',
  styleUrls: ['./astronomical-search.component.css']
})
export class AstronomicalSearchComponent {
  searchForm: FormGroup;
  images: any[] = [];
  yearOptions: number[] = [];

  constructor(private fb: FormBuilder, private searchService: AstronomicalSearchService) {
    this.yearOptions = this.generateYearOptions(2010, 2024);
    this.searchForm = this.fb.group({
      query: ['', Validators.required],
      yearStart: ['', Validators.required],
      yearEnd: ['', Validators.required]
    });
  }

  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  onSubmit() {
    const { query, yearStart, yearEnd } = this.searchForm.value;

    this.searchService.searchAstronomicalImages(query, yearStart, yearEnd).subscribe(
      data => {
        this.images = data.collection.items;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
