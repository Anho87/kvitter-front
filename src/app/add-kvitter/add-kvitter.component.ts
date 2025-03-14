import { Component, inject, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-kvitter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-kvitter.component.html',
  styleUrl: './add-kvitter.component.css',
})
export class AddKvitterComponent {
  private axiosService = inject(AxiosService);
  message: string = '';
  hashtags: string = '';
  hashtaglist: string[] = [];

  kvitt(): void {
    this.splitHashtags();
    let data = {
      message: this.message,
      hashtags: this.hashtaglist,
    }
    this.axiosService
    .request('POST', '/postKvitter', data) 
    .then((response) => {
      console.log('Kvitter posted successfully', response);
    })
    .catch((error) => {
      console.error('Error posting kvitter', error);
    });
  }

  splitHashtags(): void {
    this.hashtaglist = this.hashtags.split(/\s+/).map(hashtag => hashtag.trim()).filter(hashtag => hashtag.length > 0);
  }
}


