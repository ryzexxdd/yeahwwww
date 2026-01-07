<script>
document.addEventListener('DOMContentLoaded', () => {

  // segment tabs
  document.querySelectorAll('.segment-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.seg-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById('seg-' + btn.dataset.seg).classList.add('active');
    };
  });

  // upload
  uploadBtn.onclick = () => photo.click();
  photo.onchange = () => {
    const r = new FileReader();
    r.onload = e => preview.innerHTML = `<img src="${e.target.result}">`;
    r.readAsDataURL(photo.files[0]);
  };

});
</script>
