import { Component, forwardRef,Input, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:forwardRef(()=>InputComponent)
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
 
  type=input.required<'text'|'email'|'password'>()
  placeholder=input('')
  _value=signal('')

  @Input() set value(value:string){
  this._value.set(value)
  }
  
  onChange=(value:string)=>{}
  onTouched=()=>{}

  registerOnChange(fn: any): void {
    this.onChange=fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched=fn
  }

  writeValue(obj: any): void {
    this.value=obj
  }

  setInput(event:Event){
  const value=(event.target as HTMLInputElement).value
  this._value.set(value)
  this.onChange(value)
  }
}
