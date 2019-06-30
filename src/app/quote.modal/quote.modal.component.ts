import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote.modal.component.form.html',
  styleUrls: ['./quote.modal.component.css']
})

export class Quote_ModalComponent implements OnInit {
  static leadName: string
  quoteForm: FormGroup; 
  submitted: boolean=false;

  ngOnInit(): void {

    this.quoteForm = this.formBuilder.group({
      param: new FormControl('', Validators.required),
      param1: new FormControl('', Validators.required),
    });
    console.log(this.quoteForm.controls)
  }
  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) {
    console.log(Quote_ModalComponent.leadName)
  }
  submitQuote() {
    this.submitted = true;

    if (this.quoteForm.invalid) {
      console.log(this.quoteForm.controls)
      alert('sometind is wrong')
      return;
    }
    else {
      this.modal.close('Ok click')
      alert('everything is alright')
    }
  }

}
@Component({
  selector: 'quote-model',
  templateUrl: './quote.modal.component.modal.html'
})
export class NgbdModalFocus {

  @Input()
  leadName: string;
  constructor(private _modalService: NgbModal) { }

  open() {
    console.log(this.leadName)
    Quote_ModalComponent.leadName = this.leadName
    this._modalService.open(Quote_ModalComponent);
  }
}