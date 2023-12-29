import React from 'react'
import styles from './About.module.scss'

import heroImage from '../../assets/heroImage.jpg'
import { CiFacebook ,CiTwitter ,CiInstagram ,CiYoutube, CiSearch} from "react-icons/ci";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutItem}>
        <p className={styles.aboutTitle}>Hey Iam Aswanth</p>
        <img src={heroImage} alt="hero" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut vero dolorum aspernatur odio cum debitis, facere tempore maiores totam corporis neque quis quisquam magnam perferendis voluptates libero dolores, aliquam consequuntur nostrum laudantium deserunt nobis quibusdam? Soluta, dolor totam sed ipsa voluptate eaque possimus, dolorum qui accusantium, optio laudantium mollitia vitae beatae consequuntur numquam quis? Vero obcaecati animi, similique amet modi commodi, totam nihil at qui et odio cum itaque. Consequuntur praesentium sed hic nobis soluta facere ipsum quod nemo consectetur autem fuga a, quas sapiente iste quae nostrum deserunt voluptatibus. Iste recusandae eum necessitatibus perspiciatis, error saepe molestias sapiente esse, vitae expedita neque, deleniti quas tempora adipisci voluptatem optio rerum? Natus magni nemo totam impedit deleniti vel distinctio ex, id accusamus eum dolores quia eveniet ratione sapiente ipsum. Nemo soluta sed quos est doloremque repudiandae. Totam, pariatur? Nesciunt quisquam tenetur aliquid facilis sed molestiae ea voluptatem harum excepturi asperiores.</p></div>
      <div className={styles.aboutItem}>
      <p className={styles.catoTitle}>CATEGORIES</p>
      <ul className={styles.aboutList}>
        <li className={styles.aboutListItem}>Life</li>
        <li className={styles.aboutListItem}>Tech</li>
        <li className={styles.aboutListItem}>Music</li>
        <li className={styles.aboutListItem}>Sports</li>
        <li className={styles.aboutListItem}>Cinima</li>
        <li className={styles.aboutListItem}>Books</li>

      </ul>
</div>
<div className={styles.aboutItem}>
<p className={styles.followTitle}>Follow Me</p>
<div className={styles.aboutSocial}>
    <CiFacebook className={styles.icons} />
    <CiTwitter className={styles.icons}/>
    <CiInstagram className={styles.icons}/>
    <CiYoutube className={styles.icons} />
</div>

</div>
    </div>
  )
}

export default About