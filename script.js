document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const closeBtn = document.getElementById('closeBtn');

  function openEnvelope(e) {
    e.preventDefault();
    envelope.classList.add('open');
  }

  function closeEnvelope(e) {
    e.stopPropagation();
    envelope.classList.remove('open');
  }

  // Handle both click and touch events
  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('touchend', openEnvelope);

  closeBtn.addEventListener('click', closeEnvelope);
  closeBtn.addEventListener('touchend', closeEnvelope);
});


