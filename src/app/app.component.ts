import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neovision';

  ngOnInit(): void {
    this.sendForm()
  }

  sendForm() {

    const button: HTMLButtonElement = document.querySelector('.send');
    const name: HTMLInputElement = document.querySelector('#name');
    const email: HTMLInputElement = document.querySelector('#email');

    button.addEventListener('click', () => {
      if(!name.value && !email.value) {
        return Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Favor insira o campo "name" e "email"',
          showConfirmButton: false,
          timer: 1500
        })
      }

      const options: object = {
        method: 'POST',
        url: 'https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register',
        headers: {
          candidate: 'breno.assis@hotmail.com',
          'content-type': 'application/json',
          authorization: 'Bearer 123123123'
        },
        data: {
          name: name.value,
          email: email.value
        }
      };

      axios.request(options).then(function (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Enviado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(function (error) {
        console.error(error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Não foi possível enviar!',
          showConfirmButton: false,
          timer: 1500
        })
      });
    })
  }
}
