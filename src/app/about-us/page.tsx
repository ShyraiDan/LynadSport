import styles from './AboutUs.module.scss'
import Image from 'next/image'

import about from '@/i/2.jpg'
import impact from '@/i/3.jpg'
import join from '@/i/4.jpg'

export default function AboutUs() {
  return (
    <>
      <div className={styles.top}>
        <div>
          <div>
            <h1>We are a team dedicated to bringing you the most exciting sporting events under one roof.</h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <Image src={about} alt='About'></Image>
          <div>
            <h2>
              ABOUT LYNAD<span>SPORT</span>
            </h2>
            <p>
              At{' '}
              <span>
                Lynad<span>Sport</span>
              </span>
              , we help gaming communities thrive by creating worlds beyond gameplay that unite players, fans, and
              creators around the esports and games they love.
            </p>
            <p>
              Our brands build, connect and nurture beyond game ecosystems to unlock more fun, fame and fortune, for
              gamers across the globe.
            </p>
            <p>
              Working with our developer, publisher, brand, and media partners, we deliver unique experiences that
              accelerate gaming culture and make gamer communities flourish.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <Image src={impact} alt='Impact'></Image>
          <div>
            <h2>TRUE GLOBAL IMPACT</h2>
            <p>
              <span>
                Lynad<span>Sport</span>
              </span>{' '}
              is the culmination of more than two decades of leading the esports and gaming scene. In that time our
              brands have driven esports and gaming forward, helping make esports the fastest growing entertainment
              choice on the planet.
            </p>
            <h3>As a group in 2023 we achieved:</h3>
            <ul>
              <li>225m combined fan reach</li>
              <li>522m live stream hours watched</li>
              <li>3.8bn combined online impressions</li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <Image src={join} alt='Impact'></Image>
          <div>
            <h2>
              JOIN THE LYNAD<span>SPORT</span> FAMILY
            </h2>
            <p>
              At{' '}
              <span>
                Lynad<span>Sport</span>
              </span>
              , we believe that it is beyond gameplay where the real action happens. Where players, fans, and creators
              unite around the games they love to become community. And that’s what all of us here do every day – we
              create worlds beyond gameplay where players and fans become community.
            </p>
            <p>
              We are brought together by a shared passion and drive to make gaming the most exciting form of
              entertainment in the universe. And to make the game GGFORALL, a good game for all. We are forging a path,
              with the tools to make something truly incredible for everybody, everywhere and we want you to join us on
              our mission!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
