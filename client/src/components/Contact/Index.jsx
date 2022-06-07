import './Index.scss'
import map from '../../images/map.png'
export default function Contact(props) {

  return (
    <main>
      <h1 className="title">Contact Us</h1>

      <section className="photo-description-container">
        <article className="contact-photo-container">
        <img src="https://fastly.4sqi.net/img/general/width960/7869821_xxmzmxaMc-o9vJ-9rrHeNPEWfZh7psUwEMZtodUXOb8.jpg" alt=""/>
        </article>

        <article className="contact-description-container">

          <div className="contact-description-text">Located in Baltimore City. We have been in business for 15 years serving all your local furniture needs at great, negotiable prices!</div>

        </article>
      </section>

      <section className="map-info-container">

        <article className="contact-info-container">
        <div>
          3600 S Hanover St<br /> Baltimore MD 21225 United States<br />
          410 - 354 - 5877
        </div>
        </article>

        <article className="map-container">
          <img src={map} />
        </article>
      </section>
    </main>
  )
}