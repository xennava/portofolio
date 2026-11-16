import './style.css'
import './navbar.css'
import './content.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section class="root-section">
  <div class="top-navbar-container">
    <div class="top-navbar">
      <a href="#">Beranda</a>
      <a href="#projects">Proyek</a>
      <a href="#about">Tentang Saya</a>
    </div>
  </div>
  <div class="content-container">
    <div class="timeline-container"></div>
    <div class="card-container">
      <div class="card-prev"></div>
      <div class="card">Alebama</div>
      <div class="card-next"></div>
    </div>
  </div>
</section>
`
