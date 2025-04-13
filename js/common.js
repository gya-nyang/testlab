const footerData = JSON.parse(JSON.stringify(FooterData));

const header_html = `
    <div class="wrap">
      <h1><a href="./index.html"><img src="./images/logo.svg" alt=""></a></h1>
      <nav>
        <ul>
          <li><a href="./research.html">Research</a></li>
          <li><a href="./principal_investigator.html">Members</a></li>
          <li><a href="./publication.html">Publications</a></li>
          <li><a href="./course.html">Course</a></li>
          <li><a href="#none">Group guide</a></li>
          <li><a href="./photos.html">Photos</a></li>
        </ul>
      </nav>
    </div>
`

const footer_html = `
    <div class="wrap">
      <h2><img src="./images/b_logo.svg" alt=""></h2>
      <address>${footerData.address}</address>
      <dl>
        <dt>Office:</dt>
        <dd>${footerData.office}</dd>
        <dt>Email:</dt>
        <dd>${footerData.email}</dd>
      </dl>
    </div>
`

document.querySelector('header').innerHTML = header_html
document.querySelector('footer').innerHTML = footer_html