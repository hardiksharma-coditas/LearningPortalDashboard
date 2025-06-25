import { FormGroup } from "@angular/forms";

export const errorsMessages: { [key: string]: (param: string) => string } = {
  required: () => 'Cannot be empty',
  email: () => 'Invalid email',
  minlength: (param: any) => `Minimum of ${param.requiredLength} characters is required`,
  maxlength: (param: any) => `Maximum required characters are ${param.requiredLength}`,
  min:(param:any)=>`Value should be ${param.min} or greater`,
  max:(param:any)=>`Value should be ${param.max} or lesser`
}

export function validateFunc(formGroup: FormGroup) {

  function validate(feild: keyof typeof formGroup.value) {
    const checkField = formGroup.controls[feild.toString()]
    // console.log(checkField)
    if (checkField.errors && checkField.dirty) {
      for (let key in checkField.errors) {
        return errorsMessages[key](checkField.errors[key])
      }
    }
    return ''
  }
  return validate
}

