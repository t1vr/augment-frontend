import { Component, OnInit } from '@angular/core';
import { AugmentationTypeModel, AugmentedFileModel, PhotoService, UIQuery } from '@augment/core';
import { MessageService } from 'primeng/api';
import * as JSZip from 'jszip';
import * as fs from 'file-saver';
@Component({
  selector: 'app-image-augmentation',
  templateUrl: './image-augmentation.component.html',
  styleUrls: ['./image-augmentation.component.css'],
})
export class ImageAugmentationComponent implements OnInit {
  uploadedFiles: any[] = [];
  images: AugmentedFileModel[] =[
    {
        "label": "Horizontal Shift",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFileh_shift_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQwOCwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDA4LCJleHAiOjE2NDgyODQwMDgsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijVuzcg8c3B6jJ6JrHfI_m-AgsO5E67XvLmZGJeNYfMes_GmrTxaDUs3Tlq5NimNTEYtJeaTkSdeiW6o7oF2Gl136ADMgPk8mgadZyR659vWi_1lrzwCZGt-OBXdlea9SM-sKD2qWchtfgSJ5QBK0F7bU-r4xu99qpeHPQa8yLrTDS4Do8Od-g7cyKDFI-7Kn43yXtMfX6b7uXZt_EWuKNFYTMagh4GepMpZlNaD8TwQDT-CzmzLMTz_7G5s2wUeWvjJrs39i9AeXJy2O_fWKNaKan6DtUZEztcE0ZHAK10yCDnNmNyFI2JZnNu4gzZy68cyBa88iy4N7Hp4Yjd2XA",
        "code": "some code"
    },
    {
        "label": "Vertical Shift",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFilev_shift_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQwNiwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDA2LCJleHAiOjE2NDgyODQwMDYsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QIOBwxIdPAW94xianvNoav6ApEr_y5uYaNj3a0TbGuL536611otmaB0LhHgRlO_b3rXvHLyB_aI6fmi4gDrFKZt5mj4HItmt5eHMzRzQqi8QRqnCsSRN8NQ4Y49SXS2Jc69yiY-JbTbQeQewjs8ssjJI2nkMXOgYg2f2CVQnXAan_2wT0sm_odsaXcfrN1v1J79vVoG8ZxOEFpUVMjyIPc5esFMOY_TLlX51O-8KtssMaCwuXt2GNz-a0eFE2z5nbWAgHsfDxWLc8qUnnuh9WorcM1quSQ7EODDIh821QOcImvoqkKoBVK8aK6cmurvVz2gluCjTILuCPAw__ND5ig",
        "code": "some code"
    },
    {
        "label": "Zoom",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFilezoom_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQxMCwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDEwLCJleHAiOjE2NDgyODQwMTAsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i2hbtzQNZmrIiVAU0OmGykXBb7oaPV0qtJelvotVQXFYtMMMNbgWvij_9dS_2CTXAPNVklhKPxXBf1JI5cwHzLiRvt4znP3bQq4_LoUif0IjsbowXGTbdvLcoVeBk0EGWmi2iHqYIjMwnUnUY077A2KcSlqLJSfEmI1y62cb_MXuzuXhixRph9FLzX9Z55LYjTg6Z_sN5C8xFGZH_xNNT14-jMumM-tmQU_y8JRPnkhI35eYGeXM3ucGp1X988pJ-q9DtERO-0jjerjSFqVKJ5j2bDdhMFxtaEC9JgX-VMgWD-TJGe6-zqUtCMMK9p8vqSD3vcG8NZAQ3seDfzl2OQ",
        "code": "some code"
    },
    {
        "label": "Horizontal Flip",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFileh_flip_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQxMSwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDExLCJleHAiOjE2NDgyODQwMTEsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RmS_wcwwG4CfYqqfvpBQfi6j3G6dSIOOUzaV_bCiEYF1eI3EnaUpSKjZ0BnV0yQrSJ3TPUo5yIL0PrC09Q_sG_bJg6bVUoNr0l6qfqfEhlxScwOFnFq7VEYu9LYsCjl03ODbw3wIghaPPQsNTvZZ7G_tPRf8pe6_rmvoi1x8c4PmAkXMDW2tpjfhNNB_yQcz_hDaJTSta7pb5b9Y_DkIlZQkW6raOeGjCQbq3IlnwTnJ86d398kZxdF1PDlCR4OtuHoNBxIgPtkWURe-Q-0ZE7t-rms9dnUz9OiULZdpE1rDeHyTwR2s-kxHQqk-Z3NNBSv2jxakvecAEVwQb-9Yig",
        "code": "some code"
    },
    {
        "label": "Vertical Flip",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFileh_flip_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQxMywidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDEzLCJleHAiOjE2NDgyODQwMTMsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C8Iqb5cR7fGP0P81ra1ZM9jIt6VtF72wbG9KfDBgniddnK90XaQcZ4G8R2KzzhoaBCAfJORi0QO1RSKJbDTHEDfgyxrluSRkG0VjqE-J6gDmMOfpPmLXl0xUuZa--YkS-Y7sl3WiGCUPt7Zk4VoSO3thLjl7H1ueLYIFxquibhKzQqhNxy9Lt6ldC9MNaVkUNPrGcRdTSQRzBtqLXRSewZv8vqMphdu2rPjyDOaWiDuWlpiUXZ-uiFhAfpf1hQprx7yCov1ejvgUg-0mzyG-J1Nflcz-llylA3SscW0rcTlHBGLGaLFJFWawYuLDSYD5vkreWcxAX7hg86b3gKKj7g",
        "code": "some code"
    },
    {
        "label": "Rotate",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFilerotate_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQxNCwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDE0LCJleHAiOjE2NDgyODQwMTQsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WZOMaR0z3R-mrcFlvS2pnUQrdkuJnBxh9rbqGjTjlD9V2YJjHtNc9XeztlWHLq1jyiCvdYOTnTIFQJlAmMVG6WxCHTSsVf_Q-ch9QwU5T4fi5oB-kGGXkoHxvWnhixo4qKAbkfi2fpPH6HijbzUXxlQ4ZoujbC8E4_z0LN1AUIg79Cu6dJFF8EOcBEzBiBGVbhIAdiQv2B1isjNyYE7kQVKLqDoektieP-Evc5_pKrt__BFdXYzWSFcBBTA5a0Qtv4R70YES3K_OtQlIwOU-J8fxGKt73tPs_gma29uICwfF-o1wC_6zRMgcLdAyZLSRz2NnsvcV5bvG8zrGJew8iA",
        "code": "some code"
    },
    {
        "label": "Special Mode (Wrap,Nearest,Constant,Reflect)",
        "url": "https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/myFilespecial_mode_img?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODI4MDQxNiwidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjgwNDE2LCJleHAiOjE2NDgyODQwMTYsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y3XoZAxW01IE1CcQCdsTxfZXK-mkzIzX1pOYbvBCtDMmrwhxNJTZpW1djnjiWYuiKFGUUAd6xHFPD7InGl9uBbvBpefPV2EfGvM4oW9F7kmStEHsaT0PXQEfNXKFKxgTf78xj5HQqO8Kyo1316d_hH74th4zQFyFjnuL-LbLHCpN5dJCSD_z4zXa5mVZMiMNV3nEgInA24em61PLXNizE0rfpdo1K6tV74wlN7oHqz25B8YKPBnzOPgUPhBl6fTgyzkKe___AH9X8m7S13gqmMs_EHrOutA8NvtghDXJudwVtn1eTQhGjXJCHk2-RjO6k7OHdL7MXpi-U3wS79YVDg",
        "code": "some code"
    }
];
  photos:any[]=[];
  val!: number;
  displayCustom: boolean = true;

  activeIndex: number = 0;
  selectedCities: string = '';
  augmentationType: any[] = [{ name: 'blur', isChecked: false, value: [] }];
  /**
   *
   */
  constructor(public uiQuery: UIQuery, private photoService: PhotoService) {}

  ngOnInit() {
    // this.photoService.getImages().then((images) => {
    //   this.images = images;
    //   console.log(this.images);
    // });
    this.uiQuery.files$.subscribe(
      response=>{
      
      }
    )
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  change() {
    console.log('found');
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  // download() {
  //   var zip = new JSZip();
  //   zip.file('Title.txt', 'hello');
  //   var imgFolder = zip.folder('images')!;
  //   for (let i = 0; i < this.images?.length; i++) {
  //     imgFolder.file(this.images[i].name, this.images[i], { base64: true });
  //   }
  //   zip.generateAsync({ type: 'blob' }).then(function (content) {
  //     FileSaver.saveAs(content, 'Sample.zip');
  //   });
  // }


  cities: any[]= [
    {name: 'All', code: 'NY'},
    {name: 'Selected', code: 'RM'},
];

  selectedCity: any;

  downloadFile() {
    let url='https://firebasestorage.googleapis.com/v0/b/augma-de550.appspot.com/o/chackma%20numeric.PNG?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVnbWEtZGU1NTAiLCJhdWQiOiJhdWdtYS1kZTU1MCIsImF1dGhfdGltZSI6MTY0ODIyODUyNywidXNlcl9pZCI6Ik5vc0tJNEs1OGhmN3BUTVpNRW54YlhDTVVsRDMiLCJzdWIiOiJOb3NLSTRLNThoZjdwVE1aTUVueGJYQ01VbEQzIiwiaWF0IjoxNjQ4MjI4NTI3LCJleHAiOjE2NDgyMzIxMjcsImVtYWlsIjoibnJtZXRodW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ybWV0aHVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jvdjVSm0pjCWGgqgfe_WZquLW-HVYW94fHdOvTcz_gqw34_U7Xf0rGW1qfesPFaJ16IqHBsMK-7TkzcCb7srJkClhEWMSD0N2UKSKef0ASacvf8hao4wm6VLtKUsSzK2AoOkVp_YXr1m_lsKdYhdqcVWmJDD45fpD_qXxXd5YXlqviBFC3tYZgN_UFFADTK0dXzfyxOxW7AUjIEcD5XXtJgaGFq-AEI0TMRvL4vqZ-xz588t28MgCkw2xAUiThbwGZVT5J72DaewoR20_nWUf26ZTE4U6m5GtyGr5VvK9AQFkEd3Cb07ij6VgGgeqfIID2WuSWRSquibhq7H-elm0w&fbclid=IwAR1hIKQQH5w81t_Wv0ftof8HwS74ljc-YixtZrqgcIsvfMaS-6Eg6PE1C2o'
    var filename = url.split('/').pop();
    console.log(filename);
    window.open(url,'_blank');

    try {
        fs.saveAs(url, filename);
    }
    catch (e) {
        console.log(e)
    }
}


}
