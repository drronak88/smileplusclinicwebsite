function scrollToSection(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }
function bookWhatsApp(){
  const msg = 'Hello Dr. Ronak, I\'d like to book a dental appointment at SmilePlus Dental Clinic.';
  window.open('https://wa.me/91972476002?text=' + encodeURIComponent(msg), '_blank');
}
function makeAppointment(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const datetime = document.getElementById('datetime').value.trim();
  const notes = document.getElementById('notes').value.trim();
  const clinicNumber = '91972476002';
  let msg = `Hello Dr. Ronak, I am ${name} (${phone}). I would like an appointment`;
  if(datetime) msg += ` on ${datetime}`;
  if(notes) msg += `. Notes: ${notes}`;
  msg += '.';
  const wsUrl = `https://wa.me/${clinicNumber}?text=` + encodeURIComponent(msg);
  window.open(wsUrl, '_blank');
}