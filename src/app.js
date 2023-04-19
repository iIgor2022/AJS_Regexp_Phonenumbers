export default function phoneNumbersRefactoring(phoneNumber) {
  return phoneNumber.replace(/^\d\D/, '+7').replace(/(-|\s|\(|\))*/g, '');
}
