function openModal(imgSrc, text) {
  document.getElementById('imgModal').style.display = 'block';
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('modalText').innerText = text;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

// Optional: Close modal when clicking outside the image
window.onclick = function(event) {
  var modal = document.getElementById('imgModal');
  if (event.target == modal) {
    closeModal();
  }
}