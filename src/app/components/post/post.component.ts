import { environment } from './../../environments';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, IPost } from '../../services/post.service';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})

 export class PostComponent {
  dateForm: FormGroup;
  images: any[] = [];
  today = new Date();

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      date: [this.today.toISOString().split('T')[0], [Validators.required]]
    });
  }

  onSubmit() {
    const selectedDate = this.dateForm.value.date;
    const todayDate = this.today.toISOString().split('T')[0];
    console.log("print API key below");
    console.log(environment.apiKey)
    if (selectedDate < todayDate) {
      this.postService.getPost(selectedDate).subscribe(data => {
        this.images = data;
      });
    } else {
      alert('Date cannot be today or in the future.');
    }
  }

  getImageUrl(image: string, date: string): string {
    console.log(date);
    console.log("print ful date: ");
    const [fullDate] = date.split(' '); // Split the date by space and take the first part
    console.log(fullDate);
    const [year, month, day] = fullDate.split('-'); // Split the date by hyphen
    //const [year, month, day] = date.split('-');
    return `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${image}.png?api_key=${environment.apiKey}`;
  }


//   posts: IPost[] = [];

//   constructor(private _postService: PostService) {}

//   ngOnInit(): void {
//     //get called once the component has been initialized

//     this._postService.getPosts().subscribe((data) => (this.posts = data));
//   }

//   addnewPost() {
//     this._postService.addPost().subscribe((data) => console.log(data));
//   }
//   updatethePost() {
//     this._postService.updatePost().subscribe((data) => console.log(data));
//   }
//   deletethePost() {
//     this._postService.deletePost().subscribe((data) => console.log(data));
//   }
}
